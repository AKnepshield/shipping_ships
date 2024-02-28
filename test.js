if (url.requested_resource === "docks") {
  if (url.pk != 0) {
    response_body = retrieve_dock(url.pk);
    return self.response(response_body, status.HTTP_200_SUCCESS.value);
  }
  response_body = list_docks();
  return self.response(response_body, status.HTTP_200_SUCCESS.value);
}
