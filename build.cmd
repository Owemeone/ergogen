node src\cli.js input\config-%1.yaml

del output\pcbs\%1.dsn
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/export_dsn.py /board/output/pcbs/%1.kicad_pcb /board/output/pcbs/%1.dsn

mkdir output\routed_pcbs
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/freerouting_cli:v0.1.0 java -jar /opt/freerouting_cli.jar -de /board/output/pcbs/%1.dsn -do /board/output/routed_pcbs/%1.ses

del output\routed_pcbs\%1.kicad_pcb
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/import_ses.py /board/output/pcbs/%1.kicad_pcb /board/output/routed_pcbs/%1.ses --output-file /board/output/routed_pcbs/%1.kicad_pcb

mkdir output\routed_pcbs\%1-drc
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/run_drc.py /board/output/routed_pcbs/%1.kicad_pcb output/routed_pcbs/%1-drc

call after-routing.cmd %1