import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
	return (
		<section { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</section>
	);
}
