import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto py-5 p-1">
      
      <div className="container">
      <div className="flex flex-col md:flex-row my-24">
        <div className="address flex flex-col">
          <h1 className="text-[#333] text-[3rem]">Masala Taste of India</h1>
          <div className="w-full md:w-[50%] space-y-3 text-lg">
            <a className="relative mb-5 block aspect-square w-20" href="/de">
              <img
                alt="Pizzabaaz"
                loading="lazy"
                decoding="async"
                className="object-contain"
                sizes="100vw"
                src="https://assets-prod-gillz.s3.eu-central-1.amazonaws.com/e251843b-6f27-458d-9d6f-0bc164920168/1731794259221_v6Yv4Ez.png"
                style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
              />
            </a>
            <a
              className="flex items-center justify-start"
              title="Steinbrink 26, 38122 Braunschweig-Broitzem, Germany"
              href="http://maps.google.com/maps?q=52.2368464,10.4778527"
              target="_blank"
              rel="noreferrer"
            >
              📍 Steinbrink 26, 38122 Braunschweig-Broitzem, Germany
            </a>
            <a className="flex items-center justify-start" title="053138963516" href="tel:053138963516">
              📞 053138963516
            </a>
            <a className="flex items-center justify-start" title="info@masala-gf.de" href="mailto:info@masala-gf.de">
              ✉️ info@masala-gf.de
            </a>
          </div>
        </div>
        <div className="google_map w-full md:w-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2443.3598947836963!2d10.47527777666399!3d52.23684637198838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDE0JzEyLjciTiAxMMKwMjgnNDAuMyJF!5e0!3m2!1sen!2sin!4v1736048462114!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
         
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Masala Taste Location"
          ></iframe>
        </div>
      </div>
    </div>

      
    </div>
  )
}
