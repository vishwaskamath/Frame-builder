
module.exports = {
    postProductSummary: async function (summary) {
      try {
        let result={"cart":{"total":42,"item_count":3,"items":[{"id":"60511bbb-c9dc-4082-9065-99bb53def244","unit_price":18,"quantity":1,"discountable":true,"total":18,"added":{"date":"2020-10-23 04:38:52.000000","timezone_type":3,"timezone":"Australia\/Sydney"},"product":{"name":"Custom Picture Frame","description":null,"html_description":"\u003Cul\u003E\n\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EDimensions\u003C\/span\u003E\u003C\/li\u003E\n    \u003Cul\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EImage\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EOuter (approx)\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E13.2 x 18.3 cm \u003C\/span\u003E\u003C\/li\u003E\n    \u003C\/ul\u003E\n\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EFrame Code \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E224RO\u003C\/span\u003E\u003C\/li\u003E\n    \n    \n    \n    \n\n    \n    \n\n    \n\n\n    \n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EClear\u003C\/span\u003E\n    \u003C\/li\u003E\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EBacking\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EMDF\u003C\/span\u003E\n    \u003C\/li\u003E\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EHanger \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EStandback\u003C\/span\u003E\u003C\/li\u003E\n    \n\n\u003C\/ul\u003E\n","edit_link":"\/custom-picture-frames?opening_width=10.2\u0026opening_height=15.3\u0026frame=224RO\u0026glass=CLEAR\u0026backing=MDF\u0026paper=none\u0026image_overlap=PHOTO\u0026hanger=HANGER_STANDBACK","type":"CUSTOM_PICTURE_FRAME","thumbnail":"\/images\/thumbnails\/ce\/b0\/62\/ceb062b8fab66887261049ccd417003bfa3a0550f1fd9f3c2e8e2fed8bd1617f.jpg"}},{"id":"2604fcf9-9e6f-4daf-95ec-1fac8436f459","unit_price":12,"quantity":1,"discountable":true,"total":12,"added":{"date":"2020-10-23 04:38:30.000000","timezone_type":3,"timezone":"Australia\/Sydney"},"product":{"name":"Custom Picture Frame","description":null,"html_description":"\u003Cul\u003E\n\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EDimensions\u003C\/span\u003E\u003C\/li\u003E\n    \u003Cul\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EImage\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EOuter (approx)\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E13.2 x 18.3 cm \u003C\/span\u003E\u003C\/li\u003E\n    \u003C\/ul\u003E\n\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EFrame Code \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E224F\u003C\/span\u003E\u003C\/li\u003E\n    \n    \n    \n    \n\n    \n    \n\n    \n\n\n    \n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EClear\u003C\/span\u003E\n    \u003C\/li\u003E\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EBacking\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EMDF\u003C\/span\u003E\n    \u003C\/li\u003E\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EHanger \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EStandback\u003C\/span\u003E\u003C\/li\u003E\n    \n\n\u003C\/ul\u003E\n","edit_link":"\/custom-picture-frames?opening_width=10.2\u0026opening_height=15.3\u0026frame=224F\u0026glass=CLEAR\u0026backing=MDF\u0026paper=none\u0026image_overlap=PHOTO\u0026hanger=HANGER_STANDBACK","type":"CUSTOM_PICTURE_FRAME","thumbnail":"\/images\/thumbnails\/55\/d4\/95\/55d495e0a1a34f1b12f53ecf6b92718d8364975d81dfff0672e100c0e3876091.jpg"}},{"id":"10e85829-d0e2-4d25-8490-93789d846df7","unit_price":12,"quantity":1,"discountable":true,"total":12,"added":{"date":"2020-10-23 00:56:51.000000","timezone_type":3,"timezone":"Australia\/Sydney"},"product":{"name":"Custom Picture Frame","description":null,"html_description":"\u003Cul\u003E\n\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EDimensions\u003C\/span\u003E\u003C\/li\u003E\n    \u003Cul\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EImage\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E10.2 x 15.3 cm\u003C\/span\u003E\u003C\/li\u003E\n        \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EOuter (approx)\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E13.2 x 18.3 cm \u003C\/span\u003E\u003C\/li\u003E\n    \u003C\/ul\u003E\n\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EFrame Code \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003E224F\u003C\/span\u003E\u003C\/li\u003E\n    \n    \n    \n    \n\n    \n    \n\n    \n\n\n    \n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EGlass\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EClear\u003C\/span\u003E\n    \u003C\/li\u003E\n    \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EBacking\u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EMDF\u003C\/span\u003E\n    \u003C\/li\u003E\n\n            \u003Cli\u003E\u003Cspan class=\u0022html-description-heading\u0022\u003EHanger \u003C\/span\u003E\u003Cspan class=\u0022html-description-value\u0022\u003EStandback\u003C\/span\u003E\u003C\/li\u003E\n    \n\n\u003C\/ul\u003E\n","edit_link":"\/custom-picture-frames?opening_width=10.2\u0026opening_height=15.3\u0026frame=224F\u0026glass=CLEAR\u0026backing=MDF\u0026paper=none\u0026image_overlap=PHOTO\u0026hanger=HANGER_STANDBACK","type":"CUSTOM_PICTURE_FRAME","thumbnail":"\/images\/thumbnails\/55\/d4\/95\/55d495e0a1a34f1b12f53ecf6b92718d8364975d81dfff0672e100c0e3876091.jpg"}}],"discountable_total":42}}
        let gallery_data =""
      //Insert a record in the "customers" table
      sum=JSON.stringify(summary)
  
      var sql = `INSERT INTO frameshop.cart(product_details) VALUES('${sum}')`;
      await con.query(sql, function (err, result) {
        if (err) throw err
        gallery_data = { "message": "OK", "http_code": 200, "data": result }
      })
      return gallery_data
      } catch (err) {
         console.log("error", err);
      }
    }
  }