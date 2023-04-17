import $api from '../http'

export async function GetData(page = 0, searchValue) {
	const { data } = await $api.get(
		`/company?collectionName=${searchValue}&limit=10&_page= ${+page}`
	)
	return data
}
