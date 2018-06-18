export const GET_CANDIDATES_REQUEST = "GET_CANDIDATES_REQUEST";
export const GET_CANDIDATES_RECEIVE = "GET_CANDIDATES_RECEIVE";
export const GET_CANDIDATES_FAILURE = "GET_CANDIDATES_FAILURE";

const getCandidatesRequest = () => ({
  type: GET_CANDIDATES_REQUEST
});

const getCandidatesReceive = candidates => ({
  type: GET_CANDIDATES_RECEIVE,
  candidates
});

const getCandidatesFailure = error => ({
  type: GET_CANDIDATES_FAILURE,
  error
});

export const getCandidates = () => async dispatch => {
  dispatch(getCandidatesRequest());

  try {
    const response = await fetch("/candidates/");
    const candidates = await response.json();

    dispatch(getCandidatesReceive(candidates));
  } catch (e) {
    dispatch(getCandidatesFailure(e));
  }
}
