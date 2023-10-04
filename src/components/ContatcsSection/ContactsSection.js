"use client";
import ContactsForm from "./ContactsForm/ContactsForm";
const contactInfo = [
  {
    type: "Phone number",
    numbers: ["+38 (098) 12 34 567", "+38 (073) 12 34 567"],
  },
  { type: "E-mail", emails: ["support@carptravel.com"] },
];

const socialLinks = [
  { label: "facebook", url: "https://www.facebook.com/" },
  { label: "instagram", url: "https://www.instagram.com/" },
  { label: "youtube", url: "https://www.youtube.com/" },
  { label: "tiktok", url: "https://www.tiktok.com/explore" },
];
export default function ContactsSection() {
  return (
    <section
      className="contacts-section w-[100%] max-w-[100%] h-[856px] sm:h-[691px] md:h-[762px] bg-cover bg-no-repeat"
      id="contacts"
    >
      <div className="div relative bg-bgColor w-[100%] h-[100%]">
        <div className="container z-[1] sm:flex-col text-white max-w-[280px] sm:max-w-[704px] md:max-w-[1280px] md:gap-[71px] md:px-[15px] flex flex-col relative pt-[54px] sm:mt-[0] mx-[auto] mb-[0] sm:flex-row sm:gap-[48px] sm:pt-[66px]">
          <h2 className="order-[-1] sm:mb-[12px] mb-[24px] uppercase sm:text-[67px] sm:leading-[81px] text-[40px] font-thin leading-[56px] tracking-[-0.04em] sm:text-[67px] md:text-[98px] md:leading-[118px] md:tracking-[-0.04em]">
            Contact <span className="font-medium">us</span>
          </h2>
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-[24px] sm:relative sm:items-start sm:w-[535px] sm:mb-[64px] md:mb-[0] md:justify-between md:items-center">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse gap-[20px] sm:pl-[30px] md:pl-[0] sm:w-[331px] md:justify-start"
                >
                  <p className="pt-[3px] text-[12px] font-extralight leading-[20px] md:text-[12px] md:text-start md:leading-[24px] w-[81px] text-left">
                    {item.type}
                  </p>
                  <ul>
                    {item.numbers &&
                      item.numbers.map((number, numberIndex) => (
                        <li
                          key={numberIndex}
                          className="font-normal text-[14px] leading-[24px] sm:text-[16px]"
                        >
                          <a
                            href={`tel: ${number.replace(/\s/g, "")}`}
                            className="hover:pb-[1px] cursor-pointer relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-0 before:border-b before:border-opacity-80 before:border-white before:bg-buttonBg before:bottom-0 before:left-0 before:transform before:scale-x-0 before:transform-origin-left before:transition-transform before:transition-duration-300 before:transition-timing-linear before:hover:scale-x-100"
                          >
                            {number}
                          </a>
                        </li>
                      ))}
                    {item.emails &&
                      item.emails.map((email, emailIndex) => (
                        <li
                          key={emailIndex}
                          className="font-normal text-[14px] leading-[24px] sm:text-[16px]"
                        >
                          <a
                            href={`mailto: ${email}`}
                            className="cursor-pointer relative overflow-hidden hover:pb-[1px] before:content-[''] before:absolute before:w-full before:h-0 before:border-b before:border-opacity-80 before:border-white before:bg-buttonBg before:bottom-0 before:left-0 before:transform before:scale-x-0 before:transform-origin-left before:transition-transform before:transition-duration-300 before:transition-timing-linear before:hover:scale-x-100"
                          >
                            {email}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-row gap-[20px] md:w-[331px] justify-end sm:absolute sm:right-[0] md:sticky md:flex-row-reverse md:justify-start">
                <p className="pt-[3px] text-[12px] font-extralight leading-[20px] text-end md:text-[12px] md:text-start md:leading-[24px] w-[81px]">
                  Follow us
                </p>
                <ul className="w-[81px] sm:w-[auto]">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="font-normal text-[14px] sm:text-[16px] leading-[24px] hover:border-white hover:pb-[1px] cursor-pointer relative overflow-hidden before:content-[''] before:absolute before:w-full before:h-0 before:border-b before:border-opacity-70 before:border-beige before:bg-buttonBg before:bottom-0 before:left-0 before:transform before:scale-x-0 before:transform-origin-left before:transition-transform before:transition-duration-300 before:transition-timing-linear before:hover:scale-x-100 "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <ContactsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
