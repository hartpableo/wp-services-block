import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	const { attributes } = props;
	const { blockID } = attributes;

	return (
		<section { ...useBlockProps.save({
			id: `service-block--${blockID}`,
			className: `services-block`
		}) }>
			<InnerBlocks.Content />
		</section>
	);
}
