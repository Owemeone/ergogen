mkdir output\routed_pcbs\%1-drc
docker run -w /board -v c:\\dev\\ergogen:/board --rm soundmonster/kicad-automation-scripts:latest /usr/lib/python2.7/dist-packages/kicad-automation/pcbnew_automation/run_drc.py /board/output/routed_pcbs/%1.kicad_pcb output/routed_pcbs/%1-drc

docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 pcbdraw --style builtin:oshpark-afterdark.json /board/output/routed_pcbs/%1.kicad_pcb output/routed_pcbs/%1-front.png

docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 pcbdraw -b --style builtin:oshpark-afterdark.json /board/output/routed_pcbs/%1.kicad_pcb output/routed_pcbs/%1-back.png

mkdir output\gerbers
docker run -w /board -v c:\\dev\\ergogen:/board --rm yaqwsx/kikit:v0.7 kikit fab jlcpcb --no-assembly /board/output/routed_pcbs/%1.kicad_pcb output/gerbers