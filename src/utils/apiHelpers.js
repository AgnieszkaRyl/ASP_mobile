export const mapListRequestResponse = response =>
  response.data.map(mapResponseItemDates);

const mapResponseItemDates = item => ({
  ...item,
  published_at: new Date(Date.parse(item.published_at)),
  created_at: new Date(Date.parse(item.created_at)),
  updated_at: new Date(Date.parse(item.updated_at)),
});
