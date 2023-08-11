import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'create-block/hart-service-item-block', {
  title: __('Service Item', 'hart-services-block'),
  description: __('A service item block for a single service inside the Custom Services Block', 'hart-services-block'),
  icon: "star-filled",
  parent: ["create-block/hart-services-block"],
	edit: () => <p>Edit</p>,
	save: () => <p>Save</p>,
} );
