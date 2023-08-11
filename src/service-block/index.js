import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/hart-service-item-block', {
  title: __('Service Item', 'hart-services-block'),
  description: __('A service item block for a single service inside the Custom Services Block', 'hart-services-block'),
  icon: "star-filled",
  parent: ["create-block/hart-services-block"],
  attributes: {
    blockID: {
      type: "string"
    },
    imgID: {
			type: "number"
		},
		imgSrc: {
			type: "string",
			default: "https://placehold.co/800x500"
		},
		imgAlt: {
			type: "string"
		},
		imgWidth: {
			type: "number"
		},
		imgHeight: {
			type: "number"
		},
		imgSrcset: {
			type: "string"
		},
		imgSizes: {
			type: "string"
		},
    serviceName: {
      type: "string",
      default: "Enter Service Name here..."
    },
    serviceNameTag: {
      type: "string",
      default: "p"
    },
    hasLink: {
      type: "boolean",
      default: false
    },
    serviceLink: {
      type: "string",
      default: "/"
    },
    linkOpenNewTab: {
      type: "boolean",
      default: false
    }
  },
  edit: Edit,
	save,
} );
