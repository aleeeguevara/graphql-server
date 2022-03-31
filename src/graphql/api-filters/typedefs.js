import { gql } from 'apollo-server';

//input receber de argumentos em alguma função específica, resolver específico.
//varios campos que queremos receber de uma vez, usamos o input.

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }
  enum ApiFilterOrder {
    ASC
    DESC
  }
`;
