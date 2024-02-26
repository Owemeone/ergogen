module.exports = {
    params: {
        layer: 'F.SilkS',
        text: '',
        h_size: 1,
        v_size: 1,
        thickness: 0.15,
        align: ''
    },
    body: p => {
        let align = ''
        if (p.align) { 
            align = `(justify ${p.align})`
        }
        return `
            (gr_text "${p.text}" ${p.at} (layer ${p.layer})
                (effects (font (size ${p.h_size} ${p.v_size}) (thickness ${p.thickness})) ${align})
            )
        `
    }
}