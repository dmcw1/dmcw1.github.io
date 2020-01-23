(function($) {
    // slides
    let slideImages = ['img/welcome-bg-3.jpg', 'img/welcome-bg.jpg', 'img/welcome-bg.jpg', 'img/accommodation-bg.jpg', 'img/welcome-bg-2.jpg', 'img/mameru.png'];
    let html = $('#slides').html();
    slideImages.forEach((url) => {
        $('#slides').append(html.replace('img/welcome-bg-2.jpg', url));
    })
    $('.dash').each((_i, el) => {
        $(el).prepend('<div class="digit"><div class="top" style="display: none;">0</div><div class="bottom" style="display: block;">0</div></div>');
        $(el).prepend('<div class="digit"><div class="top" style="display: none;">0</div><div class="bottom" style="display: block;">0</div></div>');
    })

    let events = ["દેવ દર્શન", "રૂડું માંમરેરૂ શોભાવશે", "ભોજન સમારંભ", "જાન પ્રસ્થાન", "હસ્ત મેળાપ"];
    let times = ["રાત્રે ૯:૦૦", "સવારે ૯:00", "સવારે ૧૦:૦૦ થી શરુ", "સવારે ૯: ૧૫", "બપોરે ૧૨:૨૯"];
    let dates = ["", "", "", "૧ ફેબ્રુઆરી ૨૦૨૦, શનિવાર", "૧ ફેબ્રુઆરી ૨૦૨૦, શનિવાર"];
    let maps = ["!1m18!1m12!1m3!1d3650.4184143615107!2d73.14230631498236!3d23.80371598456311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjPCsDQ4JzEzLjQiTiA3M8KwMDgnNDAuMiJF!5e0!3m2!1sen!2sin!4v1579686213992!5m2!1sen!2sin",
        "", "!1m18!1m12!1m3!1d3650.3999490070833!2d73.14417431498244!3d23.80437298456272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjPCsDQ4JzE1LjciTiA3M8KwMDgnNDYuOSJF!5e0!3m2!1sen!2sin!4v1579688049111!5m2!1sen!2sin", "",
        "!1m18!1m12!1m3!1d3647.733163463052!2d73.12175831498418!3d23.89907898451627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjPCsDUzJzU2LjciTiA3M8KwMDcnMjYuMiJF!5e0!3m2!1sen!2sin!4v1579025052930!5m2!1sen!2sin"
    ];
    let mapUrls = ["JiE5Z1rki7CofZGC7", "", "wBRm1retf1USpNwv7", "", "KTKkwWFTeVDAwWLAA"];
    let addr1 = ["મહાદેવ મંદિર", "કાનપુર નિવાસી સ્વ. સરદારભાઈ નારજીભાઈના સુપુત્રો પટેલ જસુભાઈ અને પટેલ રમેશભાઈ તથા સમસ્ત પરિવાર",
        "શામળાજી મંદિર <br><br>વસાઈ", "", "કનુભાઈ પટેલનું ઘર"
    ];
    let addr2 = ["<br>", " ", "<br>(તા. ઇડર)<br><br>", "", "ચોરીવાડ"];
    let addr3 = ["", " ", " ", "", " "];
    html = $('#mangalic').html().trim().replace(/>\s+</g, '><');

    for (var i = 0; i < events.length; i++) {
        var h = html;
        console.log(h);
        h = h.replace('ગણેશ સ્થાપન', events[i]);
        h = h.replace('સવારે ૯: ૧૫', times[i]);
        console.log(dates[i].length)
        if (dates[i].length > 0) h = h.replace('૩૧ જાન્યુઆરી ૨૦૨૦, શુક્રવાર', dates[i]);
        if (maps[i].length > 0) h = h.replace('!1m18!1m12!1m3!1d3650.4163626791633!2d73.14460331498233!3d23.803788984563173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzEzLjYiTiA3M8KwMDgnNDguNSJF!5e0!3m2!1sen!2sin!4v1579675132892!5m2!1sen!2sin', maps[i]);
        if (mapUrls[i].length > 0) h = h.replace('4vzDSfZ9fFFwQkzR8', mapUrls[i]);
        if (addr1[i].length > 0) h = h.replace('ભીખાભાઇ ફલજીભાઈ પટેલનું ઘર', addr1[i]);
        if (addr2[i].length > 0) h = h.replace('પટેલ (રાંગા) ફળી', addr2[i]);
        if (addr3[i].length > 0) h = h.replace('વસાઈ (તા. ઇડર)', addr3[i]);
        console.log(h);
        $('#mangalic').append(h);
    }

    let bridemaidImages = ['bridemaid-2.jpg', 'bridemaid-3.jpg'];
    let bridemaidNames = ['Prakruti', 'Chintu'];
    let bridemaidRelations = ['Sister', 'Sister'];
    html = $('#bridemaid-stage').html();
    html = html.trim();
    html = html.replace(/>\s+</g, '><');
    for (var i = 0; i < bridemaidImages.length; i++) {
        $('#bridemaid-stage').append(html.replace(/bridemaid-1.jpg/g, bridemaidImages[i])
            .replace('Sarang', bridemaidNames[i]).replace('Brother', bridemaidRelations[i]));
    }
    // $('#bridemaid-stage').append('');
    bridemaidImages = ['prachi.jpg', 'asav-dhrumi-1.jpg'];
    bridemaidNames = ['Prachi', 'Asav & Dhrumi', 'kanpur.png'];
    bridemaidRelations = ['Sister', 'Sisters', 'Brothers'];
    html = $('#groomsman-stage').html();
    for (var i = 0; i < bridemaidImages.length; i++) {
        $('#groomsman-stage').append(html.replace(/groomsman-1.jpg/g, bridemaidImages[i])
            .replace('Ronak', bridemaidNames[i]).replace('Brother', bridemaidRelations[i]));
    }
    // $('#groomsman-stage').append(html);
    // $('#bridemaid-stage').append('<div class="owl-item cloned"></div>');
    // let galleryImages = ['gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg', 'gallery-6.jpg'];
    // html = $('#gallery-grid').html();
    // for (var i = 0; i < galleryImages.length; i++) {
    //     $('#gallery-grid').append(html.replace(/gallery-1.jpg/g, galleryImages[i]));
    // }
})(jQuery);