import React, { useRef, useCallback } from 'react';
import CharacterCardLink from './CharacterCardLink';
import classNames from 'classnames';

const CharacterCardList = ({
	characters,
	results,
	isLoading,
	error,
	pageNumber,
	setPageNumber
}) => {
	const intObserver = useRef();
	const lastCharacterCard = useCallback(
		(card) => {
			if (isLoading) return;
			if (intObserver.current) intObserver.current.disconnect();

			intObserver.current = new IntersectionObserver((cards) => {
				if (cards[0].isIntersecting && results.pages !== pageNumber) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});

			if (card) intObserver.current.observe(card);
		},
		[isLoading]
	);

	return (
		<ul
			className={classNames(
				'grid grid-cols-1 gap-28 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
				{
					hidden: error
				}
			)}
		>
			{characters.map((character, index) => {
				if (characters.length === index + 1) {
					return (
						<li
							key={character.id}
							ref={lastCharacterCard}
						>
							<CharacterCardLink
								url={`/characters/${character.id}`}
								imgUrl={character.image}
								alt={character.name}
								name={character.name}
							/>
						</li>
					);
				}
				return (
					<li key={character.id}>
						<CharacterCardLink
							url={`/characters/${character.id}`}
							imgUrl={character.image}
							alt={character.name}
							name={character.name}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default CharacterCardList;
