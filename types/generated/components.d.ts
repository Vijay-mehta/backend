import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutTopNav extends Schema.Component {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logolink: Attribute.Component<'elements.logo'>;
    link: Attribute.Component<'elements.link', true>;
    cta: Attribute.Component<'elements.link'>;
    home: Attribute.Component<'elements.home', true>;
    footerlogo: Attribute.Component<'elements.footer-logo'>;
    footerlink: Attribute.Component<'elements.footer-link', true>;
  };
}

export interface ComponentsLogo extends Schema.Component {
  collectionName: 'components_components_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    href: Attribute.String;
    text: Attribute.String;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    text: Attribute.String;
    hrfe: Attribute.String;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo Link';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    text: Attribute.String;
    href: Attribute.String;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    herf: Attribute.String;
    text: Attribute.String;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsHome extends Schema.Component {
  collectionName: 'components_elements_homes';
  info: {
    displayName: 'home';
    description: '';
  };
  attributes: {};
}

export interface ElementsFooterLogo extends Schema.Component {
  collectionName: 'components_elements_footer_logos';
  info: {
    displayName: 'Footer Logo';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    href: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFooterLink extends Schema.Component {
  collectionName: 'components_elements_footer_links';
  info: {
    displayName: 'Footer Link';
    description: '';
  };
  attributes: {
    external: Attribute.Boolean;
    href: Attribute.String;
    text: Attribute.String;
  };
}

export interface EventLayoutEventLayout extends Schema.Component {
  collectionName: 'components_event_layout_event_layouts';
  info: {
    displayName: 'Event Layout';
  };
  attributes: {
    logolink: Attribute.String;
    logo: Attribute.Component<'components.logo'>;
    cta: Attribute.Component<'components.cta', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.top-nav': LayoutTopNav;
      'components.logo': ComponentsLogo;
      'components.cta': ComponentsCta;
      'elements.logo': ElementsLogo;
      'elements.link': ElementsLink;
      'elements.home': ElementsHome;
      'elements.footer-logo': ElementsFooterLogo;
      'elements.footer-link': ElementsFooterLink;
      'event-layout.event-layout': EventLayoutEventLayout;
    }
  }
}
