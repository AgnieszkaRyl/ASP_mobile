export const mapListRequestResponse = response =>
  response.data.map(mapResponseItemDates);

const mapResponseItemDates = item => ({
  ...item,
  published_at: Date.parse(item.published_at),
  created_at: Date.parse(item.created_at),
  updated_at: Date.parse(item.updated_at),
});
