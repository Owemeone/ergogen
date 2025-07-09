function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.867,-108.512556],[89.865,-56.702556]]).appendPoint([89.8649633,-55.752545]).appendArc([90.3649498,-55.2525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-55.2515527]).appendArc([126.865,-54.7515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-51.3775]).appendArc([127.365,-50.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-50.8775]).appendArc([145.365,-50.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-49.3025]).appendArc([145.865,-48.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-48.8025]).appendArc([165.793,-49.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-50.3775]).appendArc([166.293,-50.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-50.8775]).appendArc([184.293,-51.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-52.6734742]).appendArc([184.7928784,-53.1734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.3046335,-53.1777338]).appendArc([202.8044756,-53.6837575],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7928948,-54.6449686]).appendPoint([202.7916718,-54.7464763]).appendArc([203.2916355,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-55.2525]).appendArc([223.018,-55.7525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-112.7520263]).appendPoint([222.5087368,-113.634096]).appendPoint([222.5054062,-113.6398648]).appendPoint([208.3191848,-137.6979102]).appendArc([207.6384873,-137.8769551],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([192.6988164,-129.251532]).appendArc([192.5223559,-129.1899823],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([155.4479709,-123.6771666]).appendArc([155.1227799,-123.4842895],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.0364696,-110.1534487]).appendArc([144.6376702,-109.955134],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.3671057,-109.9626312]).appendArc([89.8670367,-109.4626505],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.867,-108.512556]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91.067,-108.5125097],[91.065,-56.7025097]]).appendPoint([91.0649903,-56.4525068]).appendPoint([127.5650135,-56.4515203]).appendArc([128.065,-55.9515203],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.065,-52.0775]).appendPoint([146.065,-52.0775]).appendArc([146.565,-51.5775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.565,-50.0025]).appendPoint([164.593,-50.0025]).appendPoint([164.593,-51.5775]).appendArc([165.093,-52.0775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.093,-52.0775]).appendPoint([183.093,-53.8731824]).appendArc([183.5928784,-54.3731824],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([201.5960294,-54.3775615]).appendPoint([201.5929819,-54.6305118]).appendPoint([201.5771269,-55.9464763]).appendArc([202.0770906,-56.4525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([221.818,-56.4525]).appendPoint([221.818,-112.4304873]).appendPoint([221.4695064,-113.034096]).appendPoint([221.4689321,-113.0350906]).appendPoint([207.7637499,-136.2773538]).appendPoint([207.6380058,-136.4910364]).appendPoint([193.1011145,-128.0981583]).appendArc([192.924654,-128.0366086],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([155.9072396,-122.5322643]).appendPoint([145.6332455,-108.9533663]).appendArc([145.2344461,-108.7550515],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.0670097,-108.7625345]).appendPoint([91.067,-108.5125097]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[208.279,-84.2625],[216.279,-84.2625]]).appendPoint([216.279,-41.3625]).appendPoint([208.279,-41.3625]).appendPoint([208.279,-84.2625]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.867,-108.512556],[89.865,-56.702556]]).appendPoint([89.8649633,-55.752545]).appendArc([90.3649498,-55.2525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-55.2515527]).appendArc([126.865,-54.7515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-51.3775]).appendArc([127.365,-50.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-50.8775]).appendArc([145.365,-50.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-49.3025]).appendArc([145.865,-48.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-48.8025]).appendArc([165.793,-49.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-50.3775]).appendArc([166.293,-50.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-50.8775]).appendArc([184.293,-51.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-52.6734742]).appendArc([184.7928784,-53.1734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.3046335,-53.1777338]).appendArc([202.8044756,-53.6837575],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7928948,-54.6449686]).appendPoint([202.7916718,-54.7464763]).appendArc([203.2916355,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-55.2525]).appendArc([223.018,-55.7525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-112.7520263]).appendPoint([222.5087368,-113.634096]).appendPoint([222.5054062,-113.6398648]).appendPoint([208.3191848,-137.6979102]).appendArc([207.6384873,-137.8769551],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([192.6988164,-129.251532]).appendArc([192.5223559,-129.1899823],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([155.4479709,-123.6771666]).appendArc([155.1227799,-123.4842895],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([145.0364696,-110.1534487]).appendArc([144.6376702,-109.955134],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.3671057,-109.9626312]).appendArc([89.8670367,-109.4626505],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.867,-108.512556]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[197.1576078,-114.6317481],"radius":1.1})
.union(
    CAG.circle({"center":[151.157,-107.365],"radius":1.1})
).union(
    CAG.circle({"center":[183.218,-70.4235],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-91.25],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-73.75],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function corney_island_bottom_tray_case_fn() {
                    

                // creating part 0 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_0_bounds = corney_island_bottom_tray__part_0.getBounds();
                let corney_island_bottom_tray__part_0_x = corney_island_bottom_tray__part_0_bounds[0].x + (corney_island_bottom_tray__part_0_bounds[1].x - corney_island_bottom_tray__part_0_bounds[0].x) / 2
                let corney_island_bottom_tray__part_0_y = corney_island_bottom_tray__part_0_bounds[0].y + (corney_island_bottom_tray__part_0_bounds[1].y - corney_island_bottom_tray__part_0_bounds[0].y) / 2
                corney_island_bottom_tray__part_0 = translate([-corney_island_bottom_tray__part_0_x, -corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = rotate([0,0,0], corney_island_bottom_tray__part_0);
                corney_island_bottom_tray__part_0 = translate([corney_island_bottom_tray__part_0_x, corney_island_bottom_tray__part_0_y, 0], corney_island_bottom_tray__part_0);

                corney_island_bottom_tray__part_0 = translate([-75,0,0], corney_island_bottom_tray__part_0);
                let result = corney_island_bottom_tray__part_0;
                
            

                // creating part 1 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_1_bounds = corney_island_bottom_tray__part_1.getBounds();
                let corney_island_bottom_tray__part_1_x = corney_island_bottom_tray__part_1_bounds[0].x + (corney_island_bottom_tray__part_1_bounds[1].x - corney_island_bottom_tray__part_1_bounds[0].x) / 2
                let corney_island_bottom_tray__part_1_y = corney_island_bottom_tray__part_1_bounds[0].y + (corney_island_bottom_tray__part_1_bounds[1].y - corney_island_bottom_tray__part_1_bounds[0].y) / 2
                corney_island_bottom_tray__part_1 = translate([-corney_island_bottom_tray__part_1_x, -corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = rotate([0,0,0], corney_island_bottom_tray__part_1);
                corney_island_bottom_tray__part_1 = translate([corney_island_bottom_tray__part_1_x, corney_island_bottom_tray__part_1_y, 0], corney_island_bottom_tray__part_1);

                corney_island_bottom_tray__part_1 = translate([-75,0,1], corney_island_bottom_tray__part_1);
                result = result.subtract(corney_island_bottom_tray__part_1);
                
            

                // creating part 2 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_2_bounds = corney_island_bottom_tray__part_2.getBounds();
                let corney_island_bottom_tray__part_2_x = corney_island_bottom_tray__part_2_bounds[0].x + (corney_island_bottom_tray__part_2_bounds[1].x - corney_island_bottom_tray__part_2_bounds[0].x) / 2
                let corney_island_bottom_tray__part_2_y = corney_island_bottom_tray__part_2_bounds[0].y + (corney_island_bottom_tray__part_2_bounds[1].y - corney_island_bottom_tray__part_2_bounds[0].y) / 2
                corney_island_bottom_tray__part_2 = translate([-corney_island_bottom_tray__part_2_x, -corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = rotate([0,0,0], corney_island_bottom_tray__part_2);
                corney_island_bottom_tray__part_2 = translate([corney_island_bottom_tray__part_2_x, corney_island_bottom_tray__part_2_y, 0], corney_island_bottom_tray__part_2);

                corney_island_bottom_tray__part_2 = translate([-75,0,0], corney_island_bottom_tray__part_2);
                result = result.union(corney_island_bottom_tray__part_2);
                
            

                // creating part 3 of case corney_island_bottom_tray
                let corney_island_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let corney_island_bottom_tray__part_3_bounds = corney_island_bottom_tray__part_3.getBounds();
                let corney_island_bottom_tray__part_3_x = corney_island_bottom_tray__part_3_bounds[0].x + (corney_island_bottom_tray__part_3_bounds[1].x - corney_island_bottom_tray__part_3_bounds[0].x) / 2
                let corney_island_bottom_tray__part_3_y = corney_island_bottom_tray__part_3_bounds[0].y + (corney_island_bottom_tray__part_3_bounds[1].y - corney_island_bottom_tray__part_3_bounds[0].y) / 2
                corney_island_bottom_tray__part_3 = translate([-corney_island_bottom_tray__part_3_x, -corney_island_bottom_tray__part_3_y, 0], corney_island_bottom_tray__part_3);
                corney_island_bottom_tray__part_3 = rotate([0,0,0], corney_island_bottom_tray__part_3);
                corney_island_bottom_tray__part_3 = translate([corney_island_bottom_tray__part_3_x, corney_island_bottom_tray__part_3_y, 0], corney_island_bottom_tray__part_3);

                corney_island_bottom_tray__part_3 = translate([-75,0,0], corney_island_bottom_tray__part_3);
                result = result.subtract(corney_island_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return corney_island_bottom_tray_case_fn();
            }

        