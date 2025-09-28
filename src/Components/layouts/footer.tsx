import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
    const message = "Hello, I would like to connect with you!";
  const encodedmessage  = encodeURIComponent(message)
  const phonenumber = 256778895217;
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;

  const links = [
    { name: 'Mentor', href: '/AImodel' },
    { name: 'Skills Assessment', href: '/quiz' },
    { name: 'Community', href: '/community' },
    { name: 'Success Stories', href: '/stories' },
  ];

  return (
    <footer className="bg-[#0D1117] text-[#A0AEC0] py-8">
      <div className="mx-auto space-x-5 max-w-screen-xl px-4 md:px-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {currentYear} Ananse AI - Cultural Wisdom Meets Tech Mentorship 🕷️</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[#A0AEC0] hover:text-[#FFFFFF] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <p className='text-sm'>Built with ❤ by <a className='hover:text-white' href={whatsappLink}> Harunah</a> </p>
        </div>
      </div>
    </footer>
  );
}