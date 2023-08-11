import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	const { attributes } = props;
	const { blockID, columns } = attributes;

	return (
		<section { ...useBlockProps.save({
			id: `service-block--${blockID}`,
			className: `services-block has-${columns}-cols`
		}) }>
			<div className="services-row">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
