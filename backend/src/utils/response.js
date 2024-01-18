
exports.successResponse = (response) => {
  const { message, data } = response;

  return {
    response: true,
    message: message || '',
    data: data || null
  }
}


exports.failedResponse = (response) => {
  const { message, data } = response;

  return {
    response: false,
    message: message || '',
    data: data || null
  }
}