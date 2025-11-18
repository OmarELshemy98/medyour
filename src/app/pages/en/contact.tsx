import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';
import { contactContentEn } from '../../content/en/contact';

const ContactPageEn: React.FC = () => {
  const { hero, form, contactInfo, socialSection } = contactContentEn as any;
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <div className="pt-24 md:pt-32 pb-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] mb-4">{hero.title}</h1>
            <p className="text-xl text-gray-600">{hero.subtitle}</p>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">{form.title}</h2>
              <form className="space-y-4">
                {form.fields.map((f: any, idx: number) => (
                  <div key={idx} className="flex flex-col">
                    <label className="mb-1 text-sm font-semibold">{f.label}</label>
                    {f.type === 'textarea' ? (
                      <textarea className="border rounded-lg p-3" placeholder={f.placeholder} required={f.required} />
                    ) : (
                      <input className="border rounded-lg p-3" type={f.type} placeholder={f.placeholder} required={f.required} />
                    )}
                  </div>
                ))}
                <button type="submit" className="bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-6 rounded-full">{form.buttonText}</button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-2">{contactInfo.address}</p>
              <p className="text-gray-700 mb-2">{contactInfo.phone}</p>
              <p className="text-gray-700 mb-2">{contactInfo.email}</p>
              <p className="text-gray-700">{contactInfo.workingHours}</p>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">{socialSection.heading}</h3>
                <p className="text-gray-700 mb-3">{socialSection.text}</p>
                <div className="flex gap-3">
                  {socialSection.links.map((s: any, idx: number) => (
                    <a key={idx} href={s.url} className="text-[#0099CC] hover:underline">{s.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterEn/>
    </>
  );
};

export default ContactPageEn;