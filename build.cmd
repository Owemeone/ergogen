del output\pcbs\Owemekeeb.dsn
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/export_dsn.py /board/output/pcbs/Owemekeeb.kicad_pcb /board/output/pcbs/Owemekeeb.dsn

mkdir output\routed_pcbs
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/freerouting_cli:v0.1.0 java -jar /opt/freerouting_cli.jar -de /board/output/pcbs/Owemekeeb.dsn -do /board/output/routed_pcbs/Owemekeeb.ses

del output\routed_pcbs\Owemekeeb.kicad_pcb
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/import_ses.py /board/output/pcbs/Owemekeeb.kicad_pcb /board/output/routed_pcbs/Owemekeeb.ses --output-file /board/output/routed_pcbs/Owemekeeb.kicad_pcb

mkdir output\routed_pcbs\Owemekeeb-drc
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/run_drc.py /board/output/routed_pcbs/Owemekeeb.kicad_pcb output/routed_pcbs/Owemekeeb-drc

docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 pcbdraw --style builtin:oshpark-afterdark.json /board/output/routed_pcbs/Owemekeeb.kicad_pcb output/routed_pcbs/Owemekeeb-front.png

docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 pcbdraw -b --style builtin:oshpark-afterdark.json /board/output/routed_pcbs/Owemekeeb.kicad_pcb output/routed_pcbs/Owemekeeb-back.png

mkdir output\gerbers
docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 kikit fab jlcpcb --no-assembly /board/output/routed_pcbs/Owemekeeb.kicad_pcb output/gerbers