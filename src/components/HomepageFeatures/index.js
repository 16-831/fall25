import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// const FeatureList = [
//   {
//     // title: 'Easy to Use',
//     // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   // {
//   //   title: 'Focus on What Matters',
//   //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//   //   description: (
//   //     <>
//   //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//   //       ahead and move your docs into the <code>docs</code> directory.
//   //     </>
//   //   ),
//   // },
//   // {
//   //   title: 'Powered by React',
//   //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//   //   description: (
//   //     <>
//   //       Extend or customize your website layout by reusing React. Docusaurus can
//   //       be extended while reusing the same header and footer.
//   //     </>
//   //   ),
//   // },
// ];

// function Feature({description}) {
//   return (
//     <div className={clsx('col col--4')}>
//       {/* <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div> */}
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="text--justify padding-horiz--md">
            <Heading as="h1">Course Description</Heading>
            <p>Robots need to make sequential decisions to operate in the world and generalize to diverse environments. How can they learn to do so? This is what we call the "robot learning" problem, and it spans topics in machine learning, deep learning, visual learning, and reinforcement learning and control. In this course, we will learn the fundamentals of topics in machine/deep/visual/reinforcement learning and how such approaches are applied to robot decision-making. We will study fundamentals of 1) machine/deep learning with an emphasis on approaches relevant to robotics; 2) reinforcement learning: model-based, model-free, on-policy (e.g., policy gradients), off-policy (e.g., Q-learning), offline, etc.; 3) imitation learning: behavior cloning, DAgger, inverse RL, etc.; 4) visual learning geared towards decision making including topics like generative models and their use for robotics, learning from human videos, internet videos, language models, etc.; 5) leveraging simulations, building simulations and how to transfer policies from simulation to the real world; and 6) other advanced topics such as safe robot learning, multi-task robot learning, etc.  We will also briefly touch on topics in neuroscience and psychology that provide cognitive motivations for several techniques in decision-making. Throughout the course, we will look at many examples of how such methods can be applied to real robotics tasks as well as broader applications of decision-making beyond robotics. The course will provide an overview of relevant topics and open questions in the area. There will be a strong emphasis on bridging the gap between many different fields of AI. The goal is for students to get both a high-level understanding of important problems and possible solutions, as well as a low-level understanding of technical solutions. We hope that this course will inspire you to approach problems in embodied intelligence from different perspectives in your research.</p>
          </div>
        </div>
        <h1>Instructor</h1>
        <div className="row">
          <div className="col col--2">
            <div className="text--center">
              <h3><a href="https://www.gshi.me/">Guanya Shi</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/guanyu.jpg" alt=""/>
            </div>
          </div>
        </div>

        <br />

        <h1>TAs</h1>
        <div className="row">
          <div className="col">
            <div className="text--center">
              <h3><a href="https://haochenz11.github.io/">Haochen Zhang</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/haochen.jpg" alt=""/>
            </div>
          </div>

          <div className="col">
            <div className="text--center">
              <h3><a href="https://www.ri.cmu.edu/ri-people/steven-man/">Steven Man</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/steven.jpg" alt=""/>
            </div>
          </div>

          <div className="col">
            <div className="text--center">
              <h3><a href="https://chaitanya1chawla.github.io/">Chaitanya Chawla</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/chai.png" alt=""/>
            </div>
          </div>

          <div className="col">
            <div className="text--center">
              <h3><a href="https://yingyuan0414.github.io/">Ying Yuan</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/ying.jpg" alt=""/>
            </div>
          </div>

          <div className="col">
            <div className="text--center">
              <h3><a href="https://www.wenlixiao.com/">Wenli Xiao</a></h3>
            </div>
            <div className="text--center">
              <img className={styles.featureImage} src="img/staff_pictures/wenli.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className={styles.features}>
    //   <div className="container">
    //     <div className="row">
    //       {FeatureList.map((props, idx) => (
    //         <Feature key={idx} {...props} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
