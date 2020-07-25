import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface BaseNavBarProps {
  rightOffset: number; // Percentage of nav bar width
  animationLength?: number;
}

// Fix this
function isNavLinkActive(identifier: string): boolean {
  const element = document.querySelector(identifier);

  if (!element) {
    return false;
  }

  const boundingBox = element.getBoundingClientRect();
  const boundingBoxCenter = boundingBox.top + boundingBox.height * 0.5;

  // If the fills at least half of the viewport, we should class it as the currently 'active' section
  return (
    boundingBox.top >= 0 &&
    boundingBox.left >= 0 &&
    boundingBoxCenter <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

export const BaseNavBar: React.FC<BaseNavBarProps> = (props) => {
  const SERVICES_SECTION_ID = '#services';
  const WORK_SECTION_ID = '#work';
  const ABOUT_SECTION_ID = '#about';
  const BLOG_SECTION_ID = '#blog';
  const CONTACT_SECTION_ID = '#contact';

  const style: React.CSSProperties = {
    right: `${props.rightOffset}%`,
    transition: `right ${props.animationLength ?? 0}s`,
  };

  return (
    <nav id="navigation" style={style}>
      <NavLink
        to={`/${SERVICES_SECTION_ID}`}
        className="nav-link"
        activeClassName="active"
        isActive={() => isNavLinkActive(SERVICES_SECTION_ID)}
      >
        <span>Services</span>
      </NavLink>

      <NavLink
        to={`/${WORK_SECTION_ID}`}
        className="nav-link"
        activeClassName="active"
        isActive={() => isNavLinkActive(WORK_SECTION_ID)}
      >
        <span>Work</span>
      </NavLink>

      <NavLink
        to={`/${ABOUT_SECTION_ID}`}
        className="nav-link"
        isActive={() => isNavLinkActive(ABOUT_SECTION_ID)}
        activeClassName="active"
      >
        <span>About</span>
      </NavLink>

      <NavLink
        to={`/${BLOG_SECTION_ID}`}
        className="nav-link"
        isActive={() => isNavLinkActive(BLOG_SECTION_ID)}
        activeClassName="active"
      >
        <span>Blog</span>
      </NavLink>
      <NavLink
        to={`/${CONTACT_SECTION_ID}`}
        className="nav-link"
        isActive={() => isNavLinkActive(CONTACT_SECTION_ID)}
        activeClassName="active"
      >
        <span>Contact</span>
      </NavLink>

      {props.children}
    </nav>
  );
};
