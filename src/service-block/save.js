import { useBlockProps } from '@wordpress/block-editor';

export default function Save(props) {
	const { attributes } = props;
	const { blockID } = attributes;

	return (
		<section { ...useBlockProps.save({
			id: `service--${blockID}`,
			className: `service-item`
		}) }>
			Save
		</section>
	);
}
