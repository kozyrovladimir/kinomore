import { useGetFavouritesQuery } from '@/services/KinomoreService';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Catalog } from '@/components/Catalog/Catalog';
import { Filters } from '@/components/Filters/Filters';
import { useFavourites } from '@/hooks/useFavourite';
import Head from 'next/head';

export const Favourites = () => {
	const { favourites } = useFavourites();
	const { filters } = useTypedSelector((state) => state.filtersReducer);
	const { page } = useTypedSelector((state) => state.paginationReducer);
	const query = favourites.map((el) => `search=${el}&field=id`).join('&');
	const { data, isLoading, isFetching } = useGetFavouritesQuery({ page, filters, query });

	const { Container, Heading, Description, Body, Content, Subtitle } = Catalog;

	return (
		<Catalog>
			<Head>
				<title>Избранное</title>
			</Head>
			<Container>
				<Heading>Избранное</Heading>
				<Description>Список избранного кино</Description>
				<Body>
					<Filters />
					{query ? (
						<Content data={data} isLoading={isLoading} isFetching={isFetching} />
					) : (
						<Subtitle>Список избранного пуст</Subtitle>
					)}
				</Body>
			</Container>
		</Catalog>
	);
};
