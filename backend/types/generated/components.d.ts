import type { Schema, Struct } from '@strapi/strapi';

export interface LinkInstagram extends Struct.ComponentSchema {
  collectionName: 'components_link_instagrams';
  info: {
    displayName: 'instagram';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.instagram': LinkInstagram;
    }
  }
}
