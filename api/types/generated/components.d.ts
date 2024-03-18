import type { Schema, Attribute } from '@strapi/strapi';

export interface FormGroupFormFields extends Schema.Component {
  collectionName: 'components_form_group_form_fields';
  info: {
    displayName: 'FormFields';
    description: '';
  };
  attributes: {
    ButtonLabel: Attribute.String;
    FormId: Attribute.String;
    CustomInput: Attribute.Component<'shared.custom-input', true>;
  };
}

export interface FormGroupFormOptionField extends Schema.Component {
  collectionName: 'components_form_group_form_option_fields';
  info: {
    displayName: 'FormOptionField';
    description: '';
  };
  attributes: {
    OptionId: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    Options: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Add new options on a new line followed by a,'>;
    OptionLabel: Attribute.String;
  };
}

export interface FormGroupFormTextField extends Schema.Component {
  collectionName: 'components_form_group_form_text_fields';
  info: {
    displayName: 'FormTextField';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Placeholder: Attribute.String;
    TextId: Attribute.String & Attribute.Required;
  };
}

export interface PagesAddForm extends Schema.Component {
  collectionName: 'components_pages_add_forms';
  info: {
    displayName: 'AddForm';
    description: '';
  };
  attributes: {
    form: Attribute.Relation<'pages.add-form', 'oneToOne', 'api::form.form'>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesAlert extends Schema.Component {
  collectionName: 'components_pages_alerts';
  info: {
    displayName: 'Alert';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    Link: Attribute.Component<'pages.link'>;
    type: Attribute.Enumeration<['top', 'bottom']>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesBanner extends Schema.Component {
  collectionName: 'components_pages_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    CTA: Attribute.Component<'pages.link'>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesBlogPosts extends Schema.Component {
  collectionName: 'components_pages_blog_posts';
  info: {
    displayName: 'Blog-posts';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesButton extends Schema.Component {
  collectionName: 'components_pages_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
    description: '';
  };
  attributes: {};
}

export interface PagesContactIcon extends Schema.Component {
  collectionName: 'components_pages_contact_icons';
  info: {
    displayName: 'ContactIcon';
    icon: 'cube';
    description: '';
  };
  attributes: {
    contactInformation: Attribute.String;
    contactIcon: Attribute.Media;
  };
}

export interface PagesCta extends Schema.Component {
  collectionName: 'components_pages_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    buttonIcon: Attribute.Media;
    email: Attribute.Email;
  };
}

export interface PagesFeatureImgText extends Schema.Component {
  collectionName: 'components_pages_feature_img_texts';
  info: {
    displayName: 'FeatureImgText';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    Description: Attribute.Text;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesFeaturedImageText extends Schema.Component {
  collectionName: 'components_pages_featured_image_texts';
  info: {
    displayName: 'FeaturedImageText';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.Text;
    subtitle: Attribute.Text;
    Image: Attribute.Media;
    button: Attribute.Component<'pages.cta', true>;
    subImage: Attribute.Media;
  };
}

export interface PagesFeaturedList extends Schema.Component {
  collectionName: 'components_pages_featured_lists';
  info: {
    displayName: 'FeaturedList';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    contentList: Attribute.Component<'pages.rich-text', true>;
    Image: Attribute.Media;
    imageMixcolor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Attribute.Media;
    subImage: Attribute.Media;
  };
}

export interface PagesFooter extends Schema.Component {
  collectionName: 'components_pages_footers';
  info: {
    displayName: 'Footer';
    icon: 'alien';
    description: '';
  };
  attributes: {
    copywrite: Attribute.String;
    social: Attribute.Component<'shared.meta-social', true>;
    logo: Attribute.Media;
    nav: Attribute.Component<'pages.nav-bar', true>;
    contact: Attribute.Component<'pages.contact-icon', true>;
    policy: Attribute.String;
    service: Attribute.String;
  };
}

export interface PagesHeader extends Schema.Component {
  collectionName: 'components_pages_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    nav: Attribute.Component<'pages.nav-bar', true>;
    startButton: Attribute.Component<'pages.link', true>;
    animation: Attribute.Media;
    logo: Attribute.Media;
    contactButton: Attribute.Component<'pages.cta', true>;
  };
}

export interface PagesImage extends Schema.Component {
  collectionName: 'components_pages_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    caption: Attribute.Text;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesLink extends Schema.Component {
  collectionName: 'components_pages_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    email: Attribute.Email;
    buttonIcon: Attribute.Media;
  };
}

export interface PagesMap extends Schema.Component {
  collectionName: 'components_pages_maps';
  info: {
    displayName: 'Map';
    description: '';
  };
  attributes: {
    GoogleMapUrl: Attribute.String;
    Image: Attribute.Media;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesNavBar extends Schema.Component {
  collectionName: 'components_pages_nav_bars';
  info: {
    displayName: 'NavBar';
    icon: 'apps';
    description: '';
  };
  attributes: {
    navtext: Attribute.String;
    navLink: Attribute.String;
  };
}

export interface PagesOneProcess extends Schema.Component {
  collectionName: 'components_pages_one_processes';
  info: {
    displayName: 'OneProcess';
    icon: 'bulletList';
  };
  attributes: {
    processNumber: Attribute.Integer;
    processTitle: Attribute.String;
    processText: Attribute.Text;
  };
}

export interface PagesPopup extends Schema.Component {
  collectionName: 'components_pages_popups';
  info: {
    displayName: 'Popup';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    buttonText: Attribute.String;
    backgroundImage: Attribute.Component<'pages.image'>;
    text: Attribute.Text;
    buttonSvg: Attribute.Text;
  };
}

export interface PagesProcess extends Schema.Component {
  collectionName: 'components_pages_processes';
  info: {
    displayName: 'Process';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    process: Attribute.Component<'pages.one-process', true>;
  };
}

export interface PagesQuoteSlider extends Schema.Component {
  collectionName: 'components_pages_quote_sliders';
  info: {
    displayName: 'QuoteSlider';
    icon: 'quote';
    description: '';
  };
  attributes: {
    Quote: Attribute.Component<'pages.quote', true>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.String;
    head: Attribute.String;
  };
}

export interface PagesQuote extends Schema.Component {
  collectionName: 'components_pages_quotes';
  info: {
    displayName: 'Quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text;
    author: Attribute.String;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    company: Attribute.String;
    avatar: Attribute.Media;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    sliderHeadImage: Attribute.Media;
    sliderHeadSvg: Attribute.Text;
  };
}

export interface PagesRichText extends Schema.Component {
  collectionName: 'components_pages_rich_texts';
  info: {
    displayName: 'richText';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Icon: Attribute.Media;
    svgLink: Attribute.Text;
  };
}

export interface PagesTabFields extends Schema.Component {
  collectionName: 'components_pages_tab_fields';
  info: {
    displayName: 'TabFields';
    icon: 'collapse';
  };
  attributes: {
    TabTitle: Attribute.String;
    Title: Attribute.String;
    Image: Attribute.Media;
    Description: Attribute.Blocks;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesTabs extends Schema.Component {
  collectionName: 'components_pages_tabs';
  info: {
    displayName: 'Tabs';
    icon: 'dashboard';
  };
  attributes: {
    Title: Attribute.String;
    SubTitle: Attribute.Text;
    TabsCTA: Attribute.Component<'pages.cta'>;
    TabFields: Attribute.Component<'pages.tab-fields', true>;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PagesTest extends Schema.Component {
  collectionName: 'components_pages_tests';
  info: {
    displayName: 'test';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    list: Attribute.Component<'pages.rich-text', true>;
  };
}

export interface PagesTree extends Schema.Component {
  collectionName: 'components_pages_trees';
  info: {
    displayName: 'tree';
    icon: 'bell';
    description: '';
  };
  attributes: {};
}

export interface PagesVimeo extends Schema.Component {
  collectionName: 'components_pages_vimeos';
  info: {
    displayName: 'Vimeo';
    description: '';
  };
  attributes: {
    EmbedCode: Attribute.RichText;
    Title: Attribute.String;
    Description: Attribute.RichText;
    Disabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    media: Attribute.Media;
    contactButton: Attribute.Component<'pages.cta', true>;
  };
}

export interface SharedCookieButton extends Schema.Component {
  collectionName: 'components_shared_cookie_buttons';
  info: {
    displayName: 'Cookie Button';
  };
  attributes: {
    buttonType: Attribute.Enumeration<['Primary', 'Secondary', 'Text']>;
    label: Attribute.String;
  };
}

export interface SharedCustomInput extends Schema.Component {
  collectionName: 'components_shared_custom_inputs';
  info: {
    displayName: 'CustomInput';
    icon: 'filter';
  };
  attributes: {
    Type: Attribute.Enumeration<
      [
        'text',
        'textarea',
        'select',
        'checkbox',
        'option',
        'email',
        'tel',
        'url ',
        'date',
        'scale',
        'file',
        'number'
      ]
    >;
    Label: Attribute.String;
    Help: Attribute.String;
    InputID: Attribute.String;
    Options: Attribute.Text;
    Required: Attribute.Boolean & Attribute.DefaultTo<false>;
    NotAFit: Attribute.Text;
    Placeholder: Attribute.String;
    Min: Attribute.Integer;
    Max: Attribute.Integer;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']
    > &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    socialIcon: Attribute.Media;
    socialLink: Attribute.Text;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form-group.form-fields': FormGroupFormFields;
      'form-group.form-option-field': FormGroupFormOptionField;
      'form-group.form-text-field': FormGroupFormTextField;
      'pages.add-form': PagesAddForm;
      'pages.alert': PagesAlert;
      'pages.banner': PagesBanner;
      'pages.blog-posts': PagesBlogPosts;
      'pages.button': PagesButton;
      'pages.contact-icon': PagesContactIcon;
      'pages.cta': PagesCta;
      'pages.feature-img-text': PagesFeatureImgText;
      'pages.featured-image-text': PagesFeaturedImageText;
      'pages.featured-list': PagesFeaturedList;
      'pages.footer': PagesFooter;
      'pages.header': PagesHeader;
      'pages.image': PagesImage;
      'pages.link': PagesLink;
      'pages.map': PagesMap;
      'pages.nav-bar': PagesNavBar;
      'pages.one-process': PagesOneProcess;
      'pages.popup': PagesPopup;
      'pages.process': PagesProcess;
      'pages.quote-slider': PagesQuoteSlider;
      'pages.quote': PagesQuote;
      'pages.rich-text': PagesRichText;
      'pages.tab-fields': PagesTabFields;
      'pages.tabs': PagesTabs;
      'pages.test': PagesTest;
      'pages.tree': PagesTree;
      'pages.vimeo': PagesVimeo;
      'shared.cookie-button': SharedCookieButton;
      'shared.custom-input': SharedCustomInput;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
