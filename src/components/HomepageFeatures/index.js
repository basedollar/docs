import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="feature.redeemable.title">Redeemable</Translate>,
    icon: '/img/head1.svg',
    description: (
      <>
        <Translate id="feature.redeemable.desc">Each stablecoin issued by BaseD is redeemable for $1 of collateral in the system.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.streamable.title">Base Native</Translate>,
    icon: '/img/head2.svg',
    description: (
      <>
        <Translate id="feature.streamable.desc">BaseD is built natively for Base L2.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.sustainable.title">Sustainable</Translate>,
    icon: '/img/head3.svg',
    description: (
      <>
        <Translate id="feature.sustainable.desc">BaseD yield is sustainable and comes from multiple sources including AERO farming. Revenue is shared between users, POL treasury, and BaseD stakers.</Translate>
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={icon} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
