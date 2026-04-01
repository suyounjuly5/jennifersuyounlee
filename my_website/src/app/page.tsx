export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 relative">

      {/* Left Section: Profile Card (Sticky on desktop) */}
      <aside className="w-full md:w-1/4 flex-shrink-0 md:pl-2 lg:pl-6">
        <div className="md:sticky md:top-32 flex flex-col items-start pr-4 md:pr-0">
          <div className="flex flex-col items-center text-center w-full">
            <img
              src="/profile.jpg"
              alt="Jennifer Suyoun Lee"
              className="w-48 h-48 object-cover rounded-full shadow-sm mb-6 bg-slate-100"
            />
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Jennifer Suyoun Lee</h1>
            <p className="text-slate-600 mb-6 font-medium">Master's Student • KAIST</p>
          </div>

          {/* Social Icons (Centered) */}
          <div className="flex flex-row justify-center gap-6 text-slate-400 mb-3 w-full">
            <a href="https://scholar.google.com/citations?user=daJ7soUAAAAJ&hl=en" className="hover:text-blue-600 transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jennifer-suyoun-lee-551168367" className="hover:text-blue-600 transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://github.com/" className="hover:text-blue-600 transition-transform hover:scale-110" target="_blank" rel="noopener noreferrer" aria-label="CV">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
            </a>
          </div>
          <p className="w-full text-center text-sm text-slate-500 mb-4">jenslee705@kaist.ac.kr</p>

          {/* Education Section */}
          <div className="w-full pt-8 border-t border-slate-200">
            <h2 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Education</h2>


            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-sm font-bold text-slate-800 tracking-tight">M.S., KAIST <span className="font-normal text-slate-600">— Industrial Design</span></h3>
                <p className="text-xs text-slate-500 mt-1">Sep 2025 – Present</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-800 tracking-tight">B.S., KAIST <span className="font-normal text-slate-600">— Industrial Design /<br />AI Special Designated Major</span></h3>
                <p className="text-xs text-slate-500 mt-1">Sep 2020 – Aug 2025</p>
                <p className="text-xs font-medium italic text-slate-600 mt-1">Graduated with Cum Laude</p>
              </div>

              <div>
                <p className="text-[13px] text-slate-600 flex items-center gap-1.5">
                  🇨🇭 <em className="italic text-slate-500">Alumna of <span className="underline decoration-slate-300 underline-offset-2">Leysin American School</span></em>
                </p>
                <p className="text-xs text-slate-500 mt-1">Class of 2020</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Section: Main Content */}
      <main className="w-full md:w-2/3 flex flex-col gap-20">

        {/* About Me Section */}
        <section id="about" className="scroll-mt-32">
          <h2 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest border-b border-slate-200 pb-2">About</h2>
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              Hello! I am an undergraduate student in the Department of Industrial Design at the Korea Advanced Institute of Science and Technology (KAIST), with a minor in the AI Special Designated Major.
            </p>

            <p>
              My research interest lies at the intersection of Human-Computer Interaction, Human-AI Interaction, and Accessibility, with a strong emphasis on a Human-Centered design approach.
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="scroll-mt-32">
          <h2 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest border-b border-slate-200 pb-2">Publications</h2>
          <div className="flex flex-col gap-10">

              {/* Publication 4 */}
              <div className="group">
              <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">2026</div>
              <h3 className="text-md font-bold text-slate-900 mb-1 leading-snug">
              "Oops! ChatGPT is Temporarily Unavailable!'': A Diary Study on Knowledge Workers’ Experiences of LLM Withdrawal
              </h3>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                CHI LBW 2026
                {/* <a href="https://www.sciencedirect.com/science/article/pii/S1071581925002496?via%3Dihub" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [DOI]
                </a> */}
                <a href="/Research%20PDF/2026%20CHI%20LBW.pdf" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [PDF]
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <em>Eunseo Oh*, <strong className="text-slate-800">Suyoun Lee*</strong>, Jae Young Choi*, Soobin Park, Youn-kyung Lim</em>
              </p>
            </div>

            {/* Publication 3 */}
            <div className="group">
              {/* <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">2026</div> */}
              <h3 className="text-md font-bold text-slate-900 mb-1 leading-snug">
              Investigating AI-induced Technostress and Coping Strategies of Professionals
              </h3>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                CHI 2026
                {/* <a href="https://www.sciencedirect.com/science/article/pii/S1071581925002496?via%3Dihub" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [DOI]
                </a>
                <a href="/Research%20PDF/2025%20IJHCS%20.pdf" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [PDF]
                </a> */}
              </p>
              <p className="text-sm text-slate-600">
                <em>Heesung Kwon, Jeesun Oh, <strong className="text-slate-800">Suyoun Lee</strong>, Sunok Lee, Sangsu Lee</em>
              </p>
            </div>

            {/* Publication 2 */}
            <div className="group">
              {/* <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">2026</div> */}
              <h3 className="text-md font-bold text-slate-900 mb-1 leading-snug">
                Creating Text-Based AI Clones of Myself: Exploring Perceptions, Development, Strategies, and Breakdowns
              </h3>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                IJHCS Special Issue
                <a href="https://www.sciencedirect.com/science/article/pii/S1071581925002496?via%3Dihub" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [DOI]
                </a>
                <a href="/Research%20PDF/2025%20IJHCS%20.pdf" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [PDF]
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <em>Donggun Lee1*, <strong className="text-slate-800">Suyoun Lee*</strong>, Hyunseung Lim, Hwajung Hong</em>
              </p>
            </div>

            {/* Publication 1 */}
            <div className="group">
              <div className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-widest">2024</div>
              <h3 className="text-md font-bold text-slate-900 mb-1 leading-snug">
                LLM-Driven Learning Analytics Dashboard for Teachers in EFL Writing Education
              </h3>
              <p className="text-sm text-slate-500 mb-2 font-medium">
                EMNLP 2024 Workshop CustomNLP4U
                <a href="https://arxiv.org/abs/2410.15025" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [DOI]
                </a>
                <a href="/Research%20PDF/2024%20EMNLP%20Workshop.pdf" className="inline-flex items-center ml-2 text-sm font-normal text-slate-400 hover:text-slate-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  [PDF]
                </a>
              </p>
              <p className="text-sm text-slate-600">
                <em>Minsun Kim, SeonGyeom Kim, <strong className="text-slate-800">Suyoun Lee</strong>, Yoosang Yoon, Junho Myung, Haneul Yoo, Hyunseung Lim, Jieun Han, Yoonsu Kim, So-Yeon Ahn, Juho Kim, Alice Oh, Hwajung Hong, Tak Yeon Lee</em>
              </p>
            </div>


          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <h2 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest border-b border-slate-200 pb-2">Projects</h2>
          <div className="flex flex-col gap-12">

            {/* Project 1 */}
            <div className="flex flex-col sm:flex-row gap-6 group">
              <div className="w-full sm:w-1/3 flex-shrink-0">
                <img src="/to-i.png" alt="to-i Project" className="w-full h-auto aspect-square object-cover rounded-xl shadow-sm border border-slate-200/60 group-hover:shadow-md transition-shadow bg-slate-50" />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="text-lg font-bold text-slate-900 mb-2">to-i</h3>
                <p className="text-sm text-slate-500 mb-4">
                  <em><strong className="text-slate-800">Suyoun Lee</strong>, Punn Lertjaturaphat, Gahyeon Kim, Seo Young Choi, Jei Kong</em>
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "to-i" is a communication tool designed for severely abused teenagers to discreetly seek help from the police and child protection agencies. The device communicates using a specific sound frequency that is recognizable to teenagers but undetectable by their abusive parents. “to-i” strengthens trust between the child and authorities while also simplifying and personalizing the abuse reporting process, reducing the psychological barriers to seeking help. Ultimately, it serves as a crucial step in protecting the child by ensuring that abusive parents face the necessary interventions.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col sm:flex-row gap-6 group">
              <div className="w-full sm:w-1/3 flex-shrink-0">
                <img src="/confitint.jpg" alt="ConfiTint Project" className="w-full h-auto aspect-square object-cover rounded-xl shadow-sm border border-slate-200/60 group-hover:shadow-md transition-shadow bg-slate-50" />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ConfiTint</h3>
                <p className="text-sm text-slate-500 mb-4">
                  <em><strong className="text-slate-800">Suyoun Lee</strong>, Jaeyong Jung, Maida Aizaz, SeoJin Youn</em>
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ConfiTint provides insights into the context behind stock price fluctuations, aiding users in forming their own educated opinions about potential investments. The app presents a single stock information in two unique perspectives, each with supporting background knowledge: one optimistic and the other cautious. Users choose the view that aligns with their investment preferences. Based on the selection, they receive results displayed in a distinct color, accompanied by a summary tailored to their choices. ConfiTint allows individuals to develop their own strategies and principles, positioning them at the forefront of their financial decisions.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col sm:flex-row gap-6 group">
              <div className="w-full sm:w-1/3 flex-shrink-0">
                <img src="/virusvamoose.jpeg" alt="Virus Vamoose Project" className="w-full h-auto aspect-square object-cover rounded-xl shadow-sm border border-slate-200/60 group-hover:shadow-md transition-shadow bg-slate-50" />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Virus Vamoose</h3>
                <p className="text-sm text-slate-500 mb-4">
                  <em><strong className="text-slate-800">Suyoun Lee</strong></em>
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Virus Vamoose turns a traditional game of tag into a digital story about a virus outbreak. Players can be the Infector spreading the virus, the Researcher making a cure, the Citizen waiting for help, or the Thief trying to steal the cure. It is played outside in a playground, so it gets children up and moving. This is a unique game that brings fun, excitement, and energy to children’s playtime.This work was selected for an Excellence Award and has been exhibited at the Nexperium in the Daejeon Shinsegae Art & Science Department Store.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col sm:flex-row gap-6 group">
              <div className="w-full sm:w-1/3 flex-shrink-0">
                <img src="/nh.png" alt="Nonghyup Bank Project" className="w-full h-auto aspect-square object-cover rounded-xl shadow-sm border border-slate-200/60 group-hover:shadow-md transition-shadow bg-slate-50" />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Nonghyup Bank</h3>
                <p className="text-sm text-slate-500 mb-4">
                  <em><strong className="text-slate-800">Suyoun Lee</strong>, Jian Jun, Minseo Bang, Nayeong Kim</em>
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  This project aimed at improving the IPO subscription UI for NH NongHyup Bank's NH Investment & Securities app (Na-moo Securities). It involved benchmarking IPO UIs from other companies and incorporating design considerations to cater to the bank’s primary customer base, which predominantly consists of individuals in their 40s to 60s.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}