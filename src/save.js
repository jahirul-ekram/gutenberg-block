import { useBlockProps } from '@wordpress/block-editor';
import Render from './render';

export default function save({ attributes }) {
	const { imageUrl, title, description } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<Render imageUrl={imageUrl} title={title} description={description} />
		</div>
	);
}
