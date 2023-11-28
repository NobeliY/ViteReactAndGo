import { ReactSVG } from 'react-svg';
import Logo from '../../assets/Logo.svg';
import GitHub from '../../assets/GitHub.svg';

const SelfLogo = () => (
  <div className='logo'>
    <ReactSVG src={Logo} />
    <h1>REPAER</h1>
  </div>
);

const GithabLogo = () => (
  <a className='github' href='https://github.com/NobeliY'>
    <ReactSVG src={GitHub} />
  </a>
);

export const LeftSide = () => {
  return (
    <div className={'overlay_sides.overlay_sides_left'}>
      <SelfLogo />
      <GithabLogo />
    </div>
  );
};
