import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { blockID } = attributes;

	setAttributes({ blockID: !blockID ? clientId : blockID });

	return (
		<div { ...useBlockProps({
			id: `service--${blockID}`,
			className: `service-item`
		}) }>
			Edit
		</div>
	);
}
