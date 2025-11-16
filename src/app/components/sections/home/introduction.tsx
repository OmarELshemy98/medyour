// app/components/sections/home/introduction.tsx

/**
 * "مقدمة" قسم — مطابق لقطعة كود index.html (206-222)
 * هذا القسم عبارة عن مقدمة تعريفية عن المنصة، مع عناوين وفقرات تعريفية.
 * انظر project/index.html سطور 206-222 للبنية الأصلية.
 */

const IntroductionSection = () => (
  <section className="py-10 " dir="rtl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-right text-[1.9375rem] font-[900] leading-[4.375rem]">
        مرحبًا بكم في ميديور
      </h2>
      <p className="text-[1.125rem] block font-normal leading-[1.5rem]">
        منصتك المتطورة لحلول الرعاية الصحية بمفهوم جديد، من خلال منظومة متكاملة تتيح لك تجربة أكثر سهولة ومرونة مع
        شبكة واسعة من نخبة مقدمي الرعاية الصحية في مختلف التخصصات، دون الحاجة إلى الانتظار أو التعامل مع الإجراءات
        الطويلة والمعقدة.
      </p>
      <p className="text-[1.125rem] block font-normal leading-[1.5rem]">
        نعمل في ميديور على توفير منصة مرنة وسهلة الاستخدام، مع ضمان أعلى معايير الجودة والأمان في مكان واحد؛ سواء
        كنت فردًا تبحث عن رعاية صحية متميزة لك ولعائلتك، أو مؤسسة تسعى إلى إدارة فعّالة ومتكاملة لاحتياجات الرعاية
        الصحية لموظفيها.
      </p>
      <p className="text-[1.125rem] block font-bold pt-8 leading-[1.5rem]">
        هدفنا هو تقديم رعاية صحية متميزة وميسّرة، لتصبح حقًا متاحًا للجميع بلا حواجز أو حدود.
      </p>
    </div>
  </section>
);

export default IntroductionSection;