// app/components/sections/home/introduction.tsx

/**
 * "مقدمة" قسم — مطابق لقطعة كود index.html (206-222)
 * تمت إزالة استيراد النصوص من مجلد المحتوى.
 */

const title = "مرحبًا بك في Medyour";
const paragraphs = [
  "Medyour هي منصة مبتكرة تقدم نهجًا حديثًا للرعاية الصحية عبر منظومة متكاملة تضمن تجربة سلسلة ومرنة، وتتيح لك الوصول إلى شبكة من أفضل مقدمي الرعاية الصحية في كافة التخصصات — دون انتظار أو تعقيدات.",
  "سواء كنت فردًا يبحث عن رعاية متميزة لك ولعائلتك، أو جهة تسعى لإدارة الرعاية الصحية لموظفيها بكفاءة ومرونة، Medyour تجمع بين سهولة الاستخدام والجودة والأمان في منصة واحدة.",
  "مهمتنا هي توفير رعاية صحية عالية الجودة للجميع، بلا حواجز."
];

const SecondSectionIntroduction = () => (
  <section className="py-10 " dir="rtl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-right text-[1.9375rem] font-[900] leading-[4.375rem]">
        {title}
      </h2>
      {paragraphs.map((text, idx) => (
        <p
          key={idx}
          className={
            "text-[1.125rem] block leading-[1.5rem] " +
            (idx === paragraphs.length - 1
              ? "font-bold pt-8"
              : "font-normal")
          }
        >
          {text}
        </p>
      ))}
    </div>
  </section>
);

export default SecondSectionIntroduction;