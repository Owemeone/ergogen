module.exports = {
    params: {
        class: 'PAD', // for Button
        pos: {type: 'net', value: 'pos'},
        neg: {type: 'net', value: 'neg'}
    },
    body: p => `
    
    (module lib:bat (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
	  (pad 1 thru_hole circle (at 0 -0.75 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.pos.str}) 
	  (pad 2 thru_hole circle (at 0 0.75 0) (size 1 1) (drill 0.7) (layers *.Cu *.SilkS *.Mask) ${p.neg.str})
     )

    `
}
