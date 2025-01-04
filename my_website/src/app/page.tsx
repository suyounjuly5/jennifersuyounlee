export default function Page() {
  return (
    <div>
      {/* Main Layout */}
      <div className="container">
        {/* Left Section: Profile Image and Social Links */}
        <div className="left-section">
          <img src="/profile.jpeg" alt="Your Profile" className="profile-image" />
          <p className="name">Jennifer Suyoun Lee</p>
          <div className="social-links">
            <a href="mailto:jenslee704@gmail.com">Gmail</a>
            <a href="https://scholar.google.com/">Google Scholar</a>
            <a href="https://linkedin.com/">LinkedIn</a>
            <a href="https://github.com/">GitHub</a>
            <a href="https://github.com/">CV</a>
          </div>
        </div>

        {/* Right Section: About Me */}
        <div className="right-section">
          <h2>About Me</h2>
          <p>
            Hello! I am an undergraduate student in the Department of Industrial Design at the Korea Advanced Institute of Science and Technology (KAIST), with a minor in the AI Special Designated Major.</p>
          <p>
            Before attending KAIST, I completed my high school education at Leysin American School and the International School of Geneva in Switzerland.
          </p>
          <p>
            My research interest lies at the intersection of Human-Computer Interaction, Human-AI Interaction, and Accessibility, with a strong emphasis on a Human-Centered design approach.
          </p>
        </div>
      </div >

      {/* Projects Section */}
      <section id="projects" className="projects" >
        <h2>Projects</h2>
        <div className="project">
          <img src="/to-i.png" alt="Project 1" className="project-image" />
          <div>
            <h2>to-i</h2>
            <p>
              <em><strong>Suyoun Lee</strong>, Punn Lertjaturaphat, Gahyeon Kim, Seo Young Choi, Jei Kong</em>
            </p>
            <p>
              "to-i" is a communication tool designed for severely abused teenagers to discreetly seek help from the police and child protection agencies. The device communicates using a specific sound frequency that is recognizable to teenagers but undetectable by their abusive parents. “to-i” strengthens trust between the child and authorities while also simplifying and personalizing the abuse reporting process, reducing the psychological barriers to seeking help. Ultimately, it serves as a crucial step in protecting the child by ensuring that abusive parents face the necessary interventions.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="/confitint.jpg" alt="Project 2" className="project-image" />
          <div>
            <h2>ConfiTint</h2>
            <p>
              <em><strong>Suyoun Lee</strong>, Jaeyong Jung, Maida Aizaz, SeoJin Youn</em>
            </p>
            <p>
              ConfiTint provides insights into the context behind stock price fluctuations, aiding users in forming their
              own educated opinions about potential investments. The app presents a single stock information in two unique perspectives, each with supporting background knowledge: one optimistic and the other cautious. Users choose the view that aligns with their investment preferences. Based on the selection, they receive results displayed in a distinct color, accompanied by a summary tailored to their choices. ConfiTint allows individuals to develop their own strategies and principles, positioning them at the forefront of their financial decisions.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="/virusvamoose.jpeg" alt="Project 1" className="project-image" />
          <div>
            <h2>Virus Vamoose</h2>
            <p>
              <em><strong>Suyoun Lee</strong></em>
            </p>
            <p>
              Virus Vamoose turns a traditional game of tag into a digital story about a virus outbreak. Players can be the Infector spreading the virus, the Researcher making a cure, the Citizen waiting for help, or the Thief trying to steal the cure. It is played outside in a playground, so it gets children up and moving. This is a unique game that brings fun, excitement, and energy to children’s playtime.This work was selected for an Excellence Award and has been exhibited at the Nexperium in the Daejeon Shinsegae Art & Science Department Store.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="/nh.png" alt="Project 1" className="project-image" />
          <div>
            <h2>Nonghyup Bank</h2>
            <p>
              <em><strong>Suyoun Lee</strong>, Jian Jun, Minseo Bang, Nayeong Kim</em>
            </p>
            <p>This project aimed at improving the IPO subscription UI for NH NongHyup Bank's NH Investment & Securities app (Na-moo Securities). It involved benchmarking IPO UIs from other companies and incorporating design considerations to cater to the bank’s primary customer base, which predominantly consists of individuals in their 40s to 60s.</p>
          </div>
        </div>
      </section >

      {/* Publications Section */}
      <section id="publications" className="publications" >
        <h2>Publications</h2>

        {/* Second Publication */}
        <div className="publication">
          <div className="maininfo">
            <h3>
              Creating Text-Based AI Clones of Myself: Exploring Perceptions, Development, Strategies, and Breakdowns
              <a href="" className="publication-link" target="_blank" rel="noopener noreferrer">Link</a>
            </h3>
            <p>(Under review)</p>
            <p>
              <em>Donggun Lee, <strong>Suyoun Lee</strong>, Hyunseung Lim, Hwajung Hong</em>
            </p>
          </div>
        </div>

        <div className="publication">
          <div className="maininfo">
            <h3>
              LLM-Driven Learning Analytics Dashboard for Teachers in EFL Writing Education
              <a href="https://arxiv.org/abs/2410.15025" className="publication-link" target="_blank" rel="noopener noreferrer">Link</a>
            </h3>
            <p>EMNLP 2024 Workshop CustomNLP4U</p>
            <p>
              <em>Minsun Kim, SeonGyeom Kim, <strong>Suyoun Lee</strong>, Yoosang Yoon, Junho Myung, Haneul Yoo, Hyunseung Lim, Jieun Han, Yoonsu Kim, So-Yeon Ahn, Juho Kim, Alice Oh, Hwajung Hong, Tak Yeon Lee</em>
            </p>
          </div>
        </div>
      </section >



    </div >
  );
}