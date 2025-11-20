// app/components/sections/home/introduction.tsx

/**
 * "مقدمة" قسم — مطابق لقطعة كود index.html (206-222)
 * تمت إزالة استيراد النصوص من مجلد المحتوى.
 */

const dir = 'rtl'; // or receive as prop/context if needed

const SecondSectionIntroduction = () => (
  <section className="py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-right">
      <h2
        className={`text-[1.9375rem] font-[900] leading-[4.375rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
      >
        مرحبًا بكم في ميديور
      </h2>
      <p
        className={`text-[1.125rem] block font-normal leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-body' : ''}`}
      >
        منصتك المتطورة لحلول الرعاية الصحية بمفهوم جديد، من خلال منظومة متكاملة تتيح لك تجربة أكثر سهولة ومرونة مع
        شبكة واسعة من نخبة مقدمي الرعاية الصحية في مختلف التخصصات، دون الحاجة إلى الانتظار أو التعامل مع الإجراءات
        الطويلة والمعقدة.
      </p>
      <p
        className={`text-[1.125rem] block font-normal leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-body' : ''}`}
      >
        نعمل في ميديور على توفير منصة مرنة وسهلة الاستخدام، مع ضمان أعلى معايير الجودة والأمان في مكان واحد؛ سواء
        كنت فردًا تبحث عن رعاية صحية متميزة لك ولعائلتك، أو مؤسسة تسعى إلى إدارة فعّالة ومتكاملة لاحتياجات الرعاية
        الصحية لموظفيها.
      </p>
      <p
        className={`text-[1.125rem] block font-bold pt-8 leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-body' : ''}`}
      >
        هدفنا هو تقديم رعاية صحية متميزة وميسّرة، لتصبح حقًا متاحًا للجميع بلا حواجز أو حدود.
      </p>
    </div>
  </section>
);

export default SecondSectionIntroduction;