var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
    {
      'baslik': 'Anasayfa',
      'sayfaBaslik':{
         'siteAd':'Mekan32',
         'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar': [
        {
            'ad':'Starbucks',
            'adres':'Centrum Garden',
            'puan':'4',
            'imkanlar':['Kahve','Çay','Pasta'],
            'mesafe':'10km'
        },
        {    
            'ad':'Gloria Jeans',
            'adres':'Iyaş Avm',
            'puan':'3',
            'imkanlar':['Kahve','Kek','Çay'],
            'mesafe':'5km'

        },
        {
            'ad':'Mackbear Coffee Co.',
            'adres':'Kafeler Caddesi',
            'puan':'2',
            'imkanlar':['Dünya kahveleri','Çay','Cookie'],
            'mesafe':'110km'
        },
        {
            'ad':'Karikatür Bi Kafe',
            'adres':'Kafeler Caddesi',
            'puan':'4',
            'imkanlar':['Kahveler','Tatlılar','Atıştırmalıklar'],
            'mesafe':'50km'
        },
        {
            'ad':'Abdülcanbaz Book-Vintage Cafe',
            'adres':'Isparta Merkez',
            'puan':'5',
            'imkanlar':['Soğuk İçecekler','Bitki Çayları','Pastalar'],
            'mesafe':'45km'
        }    
      ]
     }
    );
}

const mekanBilgisi=function(req, res) {
    res.render('mekan-detay', {
        'baslik':'Mekan Bilgisi',
        'sayfaBaslik':'Starbucks',
        'mekanBilgisi':{
            'ad':'Starbucks',
            'adres':'Centrum Garden AVM',
            'puan':3,
            'imkanlar':['Kahve','Pasta','Kek'],
            'koordinatlar':{
                'enlem':37.781885,
                'boylam':30.566034
            },
            'saatler':[
                {
                  'gunler':'Pazartesi-Cuma',
                  'acilis':'7:00',
                  'kapanis':'23:00',
                  'kapali':false
                },
                {
                  'gunler':'Cumartesi',
                  'acilis':'9:00',
                  'kapanis':'22:30',
                  'kapali':false
                },
                {
                  'gunler':'Pazar',
                  'kapali':true
                }
            ],
            'yorumlar':[
                {
                   'yorumYapan':'Asım Sinan Yüksel',
                   'puan':3,
                   'tarih':'8 Ekim 2017',
                   'yorumMetni':'Kahveleri çok güzel'
                }

            ]
        } 
    });
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle', footer: 'Öykü Erkaya 2020', });  
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle    
}
