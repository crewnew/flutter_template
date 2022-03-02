/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  float8: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type ByteaComparisonExp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "classifications" */
export type Classifications = {
  __typename?: 'Classifications';
  /** An array relationship */
  entityClassifications: Array<EntityClassification>;
  /** An aggregate relationship */
  entityClassificationsAggregate: EntityClassificationAggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "classifications" */
export type ClassificationsEntityClassificationsArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


/** columns and relationships of "classifications" */
export type ClassificationsEntityClassificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};

/** aggregated selection of "classifications" */
export type ClassificationsAggregate = {
  __typename?: 'ClassificationsAggregate';
  aggregate?: Maybe<ClassificationsAggregateFields>;
  nodes: Array<Classifications>;
};

/** aggregate fields of "classifications" */
export type ClassificationsAggregateFields = {
  __typename?: 'ClassificationsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ClassificationsMaxFields>;
  min?: Maybe<ClassificationsMinFields>;
};


/** aggregate fields of "classifications" */
export type ClassificationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ClassificationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "classifications". All fields are combined with a logical 'AND'. */
export type ClassificationsBoolExp = {
  _and?: InputMaybe<Array<ClassificationsBoolExp>>;
  _not?: InputMaybe<ClassificationsBoolExp>;
  _or?: InputMaybe<Array<ClassificationsBoolExp>>;
  entityClassifications?: InputMaybe<EntityClassificationBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "classifications" */
export enum ClassificationsConstraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "classifications" */
export type ClassificationsInsertInput = {
  entityClassifications?: InputMaybe<EntityClassificationArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ClassificationsMaxFields = {
  __typename?: 'ClassificationsMaxFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ClassificationsMinFields = {
  __typename?: 'ClassificationsMinFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "classifications" */
export type ClassificationsMutationResponse = {
  __typename?: 'ClassificationsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Classifications>;
};

/** input type for inserting object relation for remote table "classifications" */
export type ClassificationsObjRelInsertInput = {
  data: ClassificationsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ClassificationsOnConflict>;
};

/** on_conflict condition type for table "classifications" */
export type ClassificationsOnConflict = {
  constraint: ClassificationsConstraint;
  update_columns?: Array<ClassificationsUpdateColumn>;
  where?: InputMaybe<ClassificationsBoolExp>;
};

/** Ordering options when selecting data from "classifications". */
export type ClassificationsOrderBy = {
  entityClassificationsAggregate?: InputMaybe<EntityClassificationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: classifications */
export type ClassificationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "classifications" */
export enum ClassificationsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "classifications" */
export type ClassificationsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "classifications" */
export enum ClassificationsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type ClassificationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ClassificationsSetInput>;
  where: ClassificationsBoolExp;
};

/** columns and relationships of "condition_field_type" */
export type ConditionFieldType = {
  __typename?: 'ConditionFieldType';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  ruleConditions: Array<RuleConditions>;
  /** An aggregate relationship */
  ruleConditionsAggregate: RuleConditionsAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "condition_field_type" */
export type ConditionFieldTypeRuleConditionsArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


/** columns and relationships of "condition_field_type" */
export type ConditionFieldTypeRuleConditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};

/** aggregated selection of "condition_field_type" */
export type ConditionFieldTypeAggregate = {
  __typename?: 'ConditionFieldTypeAggregate';
  aggregate?: Maybe<ConditionFieldTypeAggregateFields>;
  nodes: Array<ConditionFieldType>;
};

/** aggregate fields of "condition_field_type" */
export type ConditionFieldTypeAggregateFields = {
  __typename?: 'ConditionFieldTypeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ConditionFieldTypeMaxFields>;
  min?: Maybe<ConditionFieldTypeMinFields>;
};


/** aggregate fields of "condition_field_type" */
export type ConditionFieldTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ConditionFieldTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "condition_field_type". All fields are combined with a logical 'AND'. */
export type ConditionFieldTypeBoolExp = {
  _and?: InputMaybe<Array<ConditionFieldTypeBoolExp>>;
  _not?: InputMaybe<ConditionFieldTypeBoolExp>;
  _or?: InputMaybe<Array<ConditionFieldTypeBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  ruleConditions?: InputMaybe<RuleConditionsBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "condition_field_type" */
export enum ConditionFieldTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  ConditionFieldTypePkey = 'condition_field_type_pkey'
}

export enum ConditionFieldTypeEnum {
  Computer = 'COMPUTER',
  Description = 'DESCRIPTION',
  /** Duration (seconds) */
  DurationSeconds = 'DURATION_SECONDS',
  Executable = 'EXECUTABLE',
  LogonDomain = 'LOGON_DOMAIN',
  PrimaryDomain = 'PRIMARY_DOMAIN',
  PrivateIpAddress = 'PRIVATE_IP_ADDRESS',
  Titlebar = 'TITLEBAR',
  Url = 'URL',
  User = 'USER'
}

/** Boolean expression to compare columns of type "ConditionFieldTypeEnum". All fields are combined with logical 'AND'. */
export type ConditionFieldTypeEnumComparisonExp = {
  _eq?: InputMaybe<ConditionFieldTypeEnum>;
  _in?: InputMaybe<Array<ConditionFieldTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ConditionFieldTypeEnum>;
  _nin?: InputMaybe<Array<ConditionFieldTypeEnum>>;
};

/** input type for inserting data into table "condition_field_type" */
export type ConditionFieldTypeInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  ruleConditions?: InputMaybe<RuleConditionsArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ConditionFieldTypeMaxFields = {
  __typename?: 'ConditionFieldTypeMaxFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ConditionFieldTypeMinFields = {
  __typename?: 'ConditionFieldTypeMinFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "condition_field_type" */
export type ConditionFieldTypeMutationResponse = {
  __typename?: 'ConditionFieldTypeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ConditionFieldType>;
};

/** input type for inserting object relation for remote table "condition_field_type" */
export type ConditionFieldTypeObjRelInsertInput = {
  data: ConditionFieldTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ConditionFieldTypeOnConflict>;
};

/** on_conflict condition type for table "condition_field_type" */
export type ConditionFieldTypeOnConflict = {
  constraint: ConditionFieldTypeConstraint;
  update_columns?: Array<ConditionFieldTypeUpdateColumn>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};

/** Ordering options when selecting data from "condition_field_type". */
export type ConditionFieldTypeOrderBy = {
  description?: InputMaybe<OrderBy>;
  ruleConditionsAggregate?: InputMaybe<RuleConditionsAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: condition_field_type */
export type ConditionFieldTypePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "condition_field_type" */
export enum ConditionFieldTypeSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "condition_field_type" */
export type ConditionFieldTypeSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "condition_field_type" */
export enum ConditionFieldTypeUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type ConditionFieldTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ConditionFieldTypeSetInput>;
  where: ConditionFieldTypeBoolExp;
};

/** columns and relationships of "condition_operator_type" */
export type ConditionOperatorType = {
  __typename?: 'ConditionOperatorType';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  ruleConditions: Array<RuleConditions>;
  /** An aggregate relationship */
  ruleConditionsAggregate: RuleConditionsAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "condition_operator_type" */
export type ConditionOperatorTypeRuleConditionsArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


/** columns and relationships of "condition_operator_type" */
export type ConditionOperatorTypeRuleConditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};

/** aggregated selection of "condition_operator_type" */
export type ConditionOperatorTypeAggregate = {
  __typename?: 'ConditionOperatorTypeAggregate';
  aggregate?: Maybe<ConditionOperatorTypeAggregateFields>;
  nodes: Array<ConditionOperatorType>;
};

/** aggregate fields of "condition_operator_type" */
export type ConditionOperatorTypeAggregateFields = {
  __typename?: 'ConditionOperatorTypeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ConditionOperatorTypeMaxFields>;
  min?: Maybe<ConditionOperatorTypeMinFields>;
};


/** aggregate fields of "condition_operator_type" */
export type ConditionOperatorTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ConditionOperatorTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "condition_operator_type". All fields are combined with a logical 'AND'. */
export type ConditionOperatorTypeBoolExp = {
  _and?: InputMaybe<Array<ConditionOperatorTypeBoolExp>>;
  _not?: InputMaybe<ConditionOperatorTypeBoolExp>;
  _or?: InputMaybe<Array<ConditionOperatorTypeBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  ruleConditions?: InputMaybe<RuleConditionsBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "condition_operator_type" */
export enum ConditionOperatorTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  ConditionOperatorTypePkey = 'condition_operator_type_pkey'
}

export enum ConditionOperatorTypeEnum {
  Contains = 'CONTAINS',
  DoesNotContain = 'DOES_NOT_CONTAIN',
  EndsWith = 'ENDS_WITH',
  EqualTo = 'EQUAL_TO',
  GreaterThan = 'GREATER_THAN',
  NotEqualTo = 'NOT_EQUAL_TO',
  StartsWith = 'STARTS_WITH'
}

/** Boolean expression to compare columns of type "ConditionOperatorTypeEnum". All fields are combined with logical 'AND'. */
export type ConditionOperatorTypeEnumComparisonExp = {
  _eq?: InputMaybe<ConditionOperatorTypeEnum>;
  _in?: InputMaybe<Array<ConditionOperatorTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ConditionOperatorTypeEnum>;
  _nin?: InputMaybe<Array<ConditionOperatorTypeEnum>>;
};

/** input type for inserting data into table "condition_operator_type" */
export type ConditionOperatorTypeInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  ruleConditions?: InputMaybe<RuleConditionsArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ConditionOperatorTypeMaxFields = {
  __typename?: 'ConditionOperatorTypeMaxFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ConditionOperatorTypeMinFields = {
  __typename?: 'ConditionOperatorTypeMinFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "condition_operator_type" */
export type ConditionOperatorTypeMutationResponse = {
  __typename?: 'ConditionOperatorTypeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ConditionOperatorType>;
};

/** input type for inserting object relation for remote table "condition_operator_type" */
export type ConditionOperatorTypeObjRelInsertInput = {
  data: ConditionOperatorTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ConditionOperatorTypeOnConflict>;
};

/** on_conflict condition type for table "condition_operator_type" */
export type ConditionOperatorTypeOnConflict = {
  constraint: ConditionOperatorTypeConstraint;
  update_columns?: Array<ConditionOperatorTypeUpdateColumn>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};

/** Ordering options when selecting data from "condition_operator_type". */
export type ConditionOperatorTypeOrderBy = {
  description?: InputMaybe<OrderBy>;
  ruleConditionsAggregate?: InputMaybe<RuleConditionsAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: condition_operator_type */
export type ConditionOperatorTypePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "condition_operator_type" */
export enum ConditionOperatorTypeSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "condition_operator_type" */
export type ConditionOperatorTypeSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "condition_operator_type" */
export enum ConditionOperatorTypeUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type ConditionOperatorTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ConditionOperatorTypeSetInput>;
  where: ConditionOperatorTypeBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "entities" */
export type Entities = {
  __typename?: 'Entities';
  /** An array relationship */
  entityClassifications: Array<EntityClassification>;
  /** An aggregate relationship */
  entityClassificationsAggregate: EntityClassificationAggregate;
  /** An object relationship */
  entity_type: EntityType;
  id: Scalars['uuid'];
  name: Scalars['String'];
  type: EntityTypeEnum;
};


/** columns and relationships of "entities" */
export type EntitiesEntityClassificationsArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


/** columns and relationships of "entities" */
export type EntitiesEntityClassificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};

/** aggregated selection of "entities" */
export type EntitiesAggregate = {
  __typename?: 'EntitiesAggregate';
  aggregate?: Maybe<EntitiesAggregateFields>;
  nodes: Array<Entities>;
};

/** aggregate fields of "entities" */
export type EntitiesAggregateFields = {
  __typename?: 'EntitiesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<EntitiesMaxFields>;
  min?: Maybe<EntitiesMinFields>;
};


/** aggregate fields of "entities" */
export type EntitiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EntitiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entities" */
export type EntitiesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Entities_Max_Order_By>;
  min?: InputMaybe<Entities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "entities" */
export type EntitiesArrRelInsertInput = {
  data: Array<EntitiesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EntitiesOnConflict>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type EntitiesBoolExp = {
  _and?: InputMaybe<Array<EntitiesBoolExp>>;
  _not?: InputMaybe<EntitiesBoolExp>;
  _or?: InputMaybe<Array<EntitiesBoolExp>>;
  entityClassifications?: InputMaybe<EntityClassificationBoolExp>;
  entity_type?: InputMaybe<EntityTypeBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<EntityTypeEnumComparisonExp>;
};

/** unique or primary key constraints on table "entities" */
export enum EntitiesConstraint {
  /** unique or primary key constraint on columns "id" */
  EntitiesPkey = 'entities_pkey'
}

/** input type for inserting data into table "entities" */
export type EntitiesInsertInput = {
  entityClassifications?: InputMaybe<EntityClassificationArrRelInsertInput>;
  entity_type?: InputMaybe<EntityTypeObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EntityTypeEnum>;
};

/** aggregate max on columns */
export type EntitiesMaxFields = {
  __typename?: 'EntitiesMaxFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EntitiesMinFields = {
  __typename?: 'EntitiesMinFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "entities" */
export type EntitiesMutationResponse = {
  __typename?: 'EntitiesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Entities>;
};

/** input type for inserting object relation for remote table "entities" */
export type EntitiesObjRelInsertInput = {
  data: EntitiesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<EntitiesOnConflict>;
};

/** on_conflict condition type for table "entities" */
export type EntitiesOnConflict = {
  constraint: EntitiesConstraint;
  update_columns?: Array<EntitiesUpdateColumn>;
  where?: InputMaybe<EntitiesBoolExp>;
};

/** Ordering options when selecting data from "entities". */
export type EntitiesOrderBy = {
  entityClassificationsAggregate?: InputMaybe<EntityClassificationAggregateOrderBy>;
  entity_type?: InputMaybe<EntityTypeOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: entities */
export type EntitiesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "entities" */
export enum EntitiesSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "entities" */
export type EntitiesSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EntityTypeEnum>;
};

/** update columns of table "entities" */
export enum EntitiesUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

export type EntitiesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EntitiesSetInput>;
  where: EntitiesBoolExp;
};

/** columns and relationships of "entity_classification" */
export type EntityClassification = {
  __typename?: 'EntityClassification';
  /** An object relationship */
  classification: Classifications;
  classificationId: Scalars['uuid'];
  /** An object relationship */
  entity: Entities;
  entityId: Scalars['uuid'];
  id: Scalars['uuid'];
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating: Scalars['Int'];
};

/** aggregated selection of "entity_classification" */
export type EntityClassificationAggregate = {
  __typename?: 'EntityClassificationAggregate';
  aggregate?: Maybe<EntityClassificationAggregateFields>;
  nodes: Array<EntityClassification>;
};

/** aggregate fields of "entity_classification" */
export type EntityClassificationAggregateFields = {
  __typename?: 'EntityClassificationAggregateFields';
  avg?: Maybe<EntityClassificationAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<EntityClassificationMaxFields>;
  min?: Maybe<EntityClassificationMinFields>;
  stddev?: Maybe<EntityClassificationStddevFields>;
  stddevPop?: Maybe<EntityClassificationStddev_PopFields>;
  stddevSamp?: Maybe<EntityClassificationStddev_SampFields>;
  sum?: Maybe<EntityClassificationSumFields>;
  varPop?: Maybe<EntityClassificationVar_PopFields>;
  varSamp?: Maybe<EntityClassificationVar_SampFields>;
  variance?: Maybe<EntityClassificationVarianceFields>;
};


/** aggregate fields of "entity_classification" */
export type EntityClassificationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entity_classification" */
export type EntityClassificationAggregateOrderBy = {
  avg?: InputMaybe<Entity_Classification_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Entity_Classification_Max_Order_By>;
  min?: InputMaybe<Entity_Classification_Min_Order_By>;
  stddev?: InputMaybe<Entity_Classification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entity_Classification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entity_Classification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entity_Classification_Sum_Order_By>;
  var_pop?: InputMaybe<Entity_Classification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entity_Classification_Var_Samp_Order_By>;
  variance?: InputMaybe<Entity_Classification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "entity_classification" */
export type EntityClassificationArrRelInsertInput = {
  data: Array<EntityClassificationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EntityClassificationOnConflict>;
};

/** aggregate avg on columns */
export type EntityClassificationAvgFields = {
  __typename?: 'EntityClassificationAvgFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "entity_classification". All fields are combined with a logical 'AND'. */
export type EntityClassificationBoolExp = {
  _and?: InputMaybe<Array<EntityClassificationBoolExp>>;
  _not?: InputMaybe<EntityClassificationBoolExp>;
  _or?: InputMaybe<Array<EntityClassificationBoolExp>>;
  classification?: InputMaybe<ClassificationsBoolExp>;
  classificationId?: InputMaybe<UuidComparisonExp>;
  entity?: InputMaybe<EntitiesBoolExp>;
  entityId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  productivityRating?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "entity_classification" */
export enum EntityClassificationConstraint {
  /** unique or primary key constraint on columns "id" */
  EntityCategoryPkey = 'entity_category_pkey'
}

/** input type for incrementing numeric columns in table "entity_classification" */
export type EntityClassificationIncInput = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "entity_classification" */
export type EntityClassificationInsertInput = {
  classification?: InputMaybe<ClassificationsObjRelInsertInput>;
  classificationId?: InputMaybe<Scalars['uuid']>;
  entity?: InputMaybe<EntitiesObjRelInsertInput>;
  entityId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type EntityClassificationMaxFields = {
  __typename?: 'EntityClassificationMaxFields';
  classificationId?: Maybe<Scalars['uuid']>;
  entityId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type EntityClassificationMinFields = {
  __typename?: 'EntityClassificationMinFields';
  classificationId?: Maybe<Scalars['uuid']>;
  entityId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "entity_classification" */
export type EntityClassificationMutationResponse = {
  __typename?: 'EntityClassificationMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EntityClassification>;
};

/** on_conflict condition type for table "entity_classification" */
export type EntityClassificationOnConflict = {
  constraint: EntityClassificationConstraint;
  update_columns?: Array<EntityClassificationUpdateColumn>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};

/** Ordering options when selecting data from "entity_classification". */
export type EntityClassificationOrderBy = {
  classification?: InputMaybe<ClassificationsOrderBy>;
  classificationId?: InputMaybe<OrderBy>;
  entity?: InputMaybe<EntitiesOrderBy>;
  entityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  productivityRating?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: entity_classification */
export type EntityClassificationPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "entity_classification" */
export enum EntityClassificationSelectColumn {
  /** column name */
  ClassificationId = 'classificationId',
  /** column name */
  EntityId = 'entityId',
  /** column name */
  Id = 'id',
  /** column name */
  ProductivityRating = 'productivityRating'
}

/** input type for updating data in table "entity_classification" */
export type EntityClassificationSetInput = {
  classificationId?: InputMaybe<Scalars['uuid']>;
  entityId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type EntityClassificationStddevFields = {
  __typename?: 'EntityClassificationStddevFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type EntityClassificationStddev_PopFields = {
  __typename?: 'EntityClassificationStddev_popFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type EntityClassificationStddev_SampFields = {
  __typename?: 'EntityClassificationStddev_sampFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type EntityClassificationSumFields = {
  __typename?: 'EntityClassificationSumFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Int']>;
};

/** update columns of table "entity_classification" */
export enum EntityClassificationUpdateColumn {
  /** column name */
  ClassificationId = 'classificationId',
  /** column name */
  EntityId = 'entityId',
  /** column name */
  Id = 'id',
  /** column name */
  ProductivityRating = 'productivityRating'
}

export type EntityClassificationUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EntityClassificationIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EntityClassificationSetInput>;
  where: EntityClassificationBoolExp;
};

/** aggregate var_pop on columns */
export type EntityClassificationVar_PopFields = {
  __typename?: 'EntityClassificationVar_popFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type EntityClassificationVar_SampFields = {
  __typename?: 'EntityClassificationVar_sampFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type EntityClassificationVarianceFields = {
  __typename?: 'EntityClassificationVarianceFields';
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "entity_type" */
export type EntityType = {
  __typename?: 'EntityType';
  description?: Maybe<Scalars['String']>;
  /** An array relationship */
  entities: Array<Entities>;
  /** An aggregate relationship */
  entitiesAggregate: EntitiesAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "entity_type" */
export type EntityTypeEntitiesArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


/** columns and relationships of "entity_type" */
export type EntityTypeEntitiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};

/** aggregated selection of "entity_type" */
export type EntityTypeAggregate = {
  __typename?: 'EntityTypeAggregate';
  aggregate?: Maybe<EntityTypeAggregateFields>;
  nodes: Array<EntityType>;
};

/** aggregate fields of "entity_type" */
export type EntityTypeAggregateFields = {
  __typename?: 'EntityTypeAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<EntityTypeMaxFields>;
  min?: Maybe<EntityTypeMinFields>;
};


/** aggregate fields of "entity_type" */
export type EntityTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EntityTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "entity_type". All fields are combined with a logical 'AND'. */
export type EntityTypeBoolExp = {
  _and?: InputMaybe<Array<EntityTypeBoolExp>>;
  _not?: InputMaybe<EntityTypeBoolExp>;
  _or?: InputMaybe<Array<EntityTypeBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  entities?: InputMaybe<EntitiesBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "entity_type" */
export enum EntityTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  EntityTypePkey = 'entity_type_pkey'
}

export enum EntityTypeEnum {
  Application = 'APPLICATION',
  Website = 'WEBSITE'
}

/** Boolean expression to compare columns of type "EntityTypeEnum". All fields are combined with logical 'AND'. */
export type EntityTypeEnumComparisonExp = {
  _eq?: InputMaybe<EntityTypeEnum>;
  _in?: InputMaybe<Array<EntityTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<EntityTypeEnum>;
  _nin?: InputMaybe<Array<EntityTypeEnum>>;
};

/** input type for inserting data into table "entity_type" */
export type EntityTypeInsertInput = {
  description?: InputMaybe<Scalars['String']>;
  entities?: InputMaybe<EntitiesArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type EntityTypeMaxFields = {
  __typename?: 'EntityTypeMaxFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type EntityTypeMinFields = {
  __typename?: 'EntityTypeMinFields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "entity_type" */
export type EntityTypeMutationResponse = {
  __typename?: 'EntityTypeMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EntityType>;
};

/** input type for inserting object relation for remote table "entity_type" */
export type EntityTypeObjRelInsertInput = {
  data: EntityTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<EntityTypeOnConflict>;
};

/** on_conflict condition type for table "entity_type" */
export type EntityTypeOnConflict = {
  constraint: EntityTypeConstraint;
  update_columns?: Array<EntityTypeUpdateColumn>;
  where?: InputMaybe<EntityTypeBoolExp>;
};

/** Ordering options when selecting data from "entity_type". */
export type EntityTypeOrderBy = {
  description?: InputMaybe<OrderBy>;
  entitiesAggregate?: InputMaybe<EntitiesAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: entity_type */
export type EntityTypePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "entity_type" */
export enum EntityTypeSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "entity_type" */
export type EntityTypeSetInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "entity_type" */
export enum EntityTypeUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type EntityTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EntityTypeSetInput>;
  where: EntityTypeBoolExp;
};

/** columns and relationships of "event_file" */
export type EventFile = {
  __typename?: 'EventFile';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  event: Events;
  eventId: Scalars['uuid'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "event_file" */
export type EventFileAggregate = {
  __typename?: 'EventFileAggregate';
  aggregate?: Maybe<EventFileAggregateFields>;
  nodes: Array<EventFile>;
};

/** aggregate fields of "event_file" */
export type EventFileAggregateFields = {
  __typename?: 'EventFileAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<EventFileMaxFields>;
  min?: Maybe<EventFileMinFields>;
};


/** aggregate fields of "event_file" */
export type EventFileAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventFileSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_file" */
export type EventFileAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Event_File_Max_Order_By>;
  min?: InputMaybe<Event_File_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_file" */
export type EventFileArrRelInsertInput = {
  data: Array<EventFileInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EventFileOnConflict>;
};

/** Boolean expression to filter rows from the table "event_file". All fields are combined with a logical 'AND'. */
export type EventFileBoolExp = {
  _and?: InputMaybe<Array<EventFileBoolExp>>;
  _not?: InputMaybe<EventFileBoolExp>;
  _or?: InputMaybe<Array<EventFileBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventsBoolExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  file?: InputMaybe<FilesBoolExp>;
  fileId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "event_file" */
export enum EventFileConstraint {
  /** unique or primary key constraint on columns "event_id", "file_id" */
  EventFileEventIdFileIdKey = 'event_file_event_id_file_id_key',
  /** unique or primary key constraint on columns "id" */
  EventFilePkey = 'event_file_pkey'
}

/** input type for inserting data into table "event_file" */
export type EventFileInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  event?: InputMaybe<EventsObjRelInsertInput>;
  eventId?: InputMaybe<Scalars['uuid']>;
  file?: InputMaybe<FilesObjRelInsertInput>;
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type EventFileMaxFields = {
  __typename?: 'EventFileMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type EventFileMinFields = {
  __typename?: 'EventFileMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  fileId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "event_file" */
export type EventFileMutationResponse = {
  __typename?: 'EventFileMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventFile>;
};

/** on_conflict condition type for table "event_file" */
export type EventFileOnConflict = {
  constraint: EventFileConstraint;
  update_columns?: Array<EventFileUpdateColumn>;
  where?: InputMaybe<EventFileBoolExp>;
};

/** Ordering options when selecting data from "event_file". */
export type EventFileOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventsOrderBy>;
  eventId?: InputMaybe<OrderBy>;
  file?: InputMaybe<FilesOrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: event_file */
export type EventFilePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "event_file" */
export enum EventFileSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "event_file" */
export type EventFileSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "event_file" */
export enum EventFileUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type EventFileUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventFileSetInput>;
  where: EventFileBoolExp;
};

/** columns and relationships of "event_network" */
export type EventNetwork = {
  __typename?: 'EventNetwork';
  /** An object relationship */
  event: Events;
  id: Scalars['uuid'];
  /** An object relationship */
  network: Networks;
  networkId: Scalars['uuid'];
};

/** aggregated selection of "event_network" */
export type EventNetworkAggregate = {
  __typename?: 'EventNetworkAggregate';
  aggregate?: Maybe<EventNetworkAggregateFields>;
  nodes: Array<EventNetwork>;
};

/** aggregate fields of "event_network" */
export type EventNetworkAggregateFields = {
  __typename?: 'EventNetworkAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<EventNetworkMaxFields>;
  min?: Maybe<EventNetworkMinFields>;
};


/** aggregate fields of "event_network" */
export type EventNetworkAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventNetworkSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_network" */
export type EventNetworkAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Event_Network_Max_Order_By>;
  min?: InputMaybe<Event_Network_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_network" */
export type EventNetworkArrRelInsertInput = {
  data: Array<EventNetworkInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EventNetworkOnConflict>;
};

/** Boolean expression to filter rows from the table "event_network". All fields are combined with a logical 'AND'. */
export type EventNetworkBoolExp = {
  _and?: InputMaybe<Array<EventNetworkBoolExp>>;
  _not?: InputMaybe<EventNetworkBoolExp>;
  _or?: InputMaybe<Array<EventNetworkBoolExp>>;
  event?: InputMaybe<EventsBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  network?: InputMaybe<NetworksBoolExp>;
  networkId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "event_network" */
export enum EventNetworkConstraint {
  /** unique or primary key constraint on columns "id" */
  EventNetworkPkey = 'event_network_pkey'
}

/** input type for inserting data into table "event_network" */
export type EventNetworkInsertInput = {
  event?: InputMaybe<EventsObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  network?: InputMaybe<NetworksObjRelInsertInput>;
  networkId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type EventNetworkMaxFields = {
  __typename?: 'EventNetworkMaxFields';
  id?: Maybe<Scalars['uuid']>;
  networkId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type EventNetworkMinFields = {
  __typename?: 'EventNetworkMinFields';
  id?: Maybe<Scalars['uuid']>;
  networkId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "event_network" */
export type EventNetworkMutationResponse = {
  __typename?: 'EventNetworkMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventNetwork>;
};

/** input type for inserting object relation for remote table "event_network" */
export type EventNetworkObjRelInsertInput = {
  data: EventNetworkInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<EventNetworkOnConflict>;
};

/** on_conflict condition type for table "event_network" */
export type EventNetworkOnConflict = {
  constraint: EventNetworkConstraint;
  update_columns?: Array<EventNetworkUpdateColumn>;
  where?: InputMaybe<EventNetworkBoolExp>;
};

/** Ordering options when selecting data from "event_network". */
export type EventNetworkOrderBy = {
  event?: InputMaybe<EventsOrderBy>;
  id?: InputMaybe<OrderBy>;
  network?: InputMaybe<NetworksOrderBy>;
  networkId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: event_network */
export type EventNetworkPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "event_network" */
export enum EventNetworkSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  NetworkId = 'networkId'
}

/** input type for updating data in table "event_network" */
export type EventNetworkSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  networkId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "event_network" */
export enum EventNetworkUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  NetworkId = 'networkId'
}

export type EventNetworkUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventNetworkSetInput>;
  where: EventNetworkBoolExp;
};

/** columns and relationships of "event_windows" */
export type EventWindows = {
  __typename?: 'EventWindows';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  event: Events;
  eventId: Scalars['uuid'];
  id: Scalars['uuid'];
  isFocused: Scalars['Boolean'];
  /** An object relationship */
  process: Processes;
  processId: Scalars['uuid'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "event_windows" */
export type EventWindowsAggregate = {
  __typename?: 'EventWindowsAggregate';
  aggregate?: Maybe<EventWindowsAggregateFields>;
  nodes: Array<EventWindows>;
};

/** aggregate fields of "event_windows" */
export type EventWindowsAggregateFields = {
  __typename?: 'EventWindowsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<EventWindowsMaxFields>;
  min?: Maybe<EventWindowsMinFields>;
};


/** aggregate fields of "event_windows" */
export type EventWindowsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventWindowsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_windows" */
export type EventWindowsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Event_Windows_Max_Order_By>;
  min?: InputMaybe<Event_Windows_Min_Order_By>;
};

/** input type for inserting array relation for remote table "event_windows" */
export type EventWindowsArrRelInsertInput = {
  data: Array<EventWindowsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EventWindowsOnConflict>;
};

/** Boolean expression to filter rows from the table "event_windows". All fields are combined with a logical 'AND'. */
export type EventWindowsBoolExp = {
  _and?: InputMaybe<Array<EventWindowsBoolExp>>;
  _not?: InputMaybe<EventWindowsBoolExp>;
  _or?: InputMaybe<Array<EventWindowsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<EventsBoolExp>;
  eventId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isFocused?: InputMaybe<BooleanComparisonExp>;
  process?: InputMaybe<ProcessesBoolExp>;
  processId?: InputMaybe<UuidComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "event_windows" */
export enum EventWindowsConstraint {
  /** unique or primary key constraint on columns "id" */
  EventProcessPkey = 'event_process_pkey'
}

/** input type for inserting data into table "event_windows" */
export type EventWindowsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  event?: InputMaybe<EventsObjRelInsertInput>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isFocused?: InputMaybe<Scalars['Boolean']>;
  process?: InputMaybe<ProcessesObjRelInsertInput>;
  processId?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type EventWindowsMaxFields = {
  __typename?: 'EventWindowsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  processId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type EventWindowsMinFields = {
  __typename?: 'EventWindowsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  eventId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  processId?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "event_windows" */
export type EventWindowsMutationResponse = {
  __typename?: 'EventWindowsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EventWindows>;
};

/** on_conflict condition type for table "event_windows" */
export type EventWindowsOnConflict = {
  constraint: EventWindowsConstraint;
  update_columns?: Array<EventWindowsUpdateColumn>;
  where?: InputMaybe<EventWindowsBoolExp>;
};

/** Ordering options when selecting data from "event_windows". */
export type EventWindowsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  event?: InputMaybe<EventsOrderBy>;
  eventId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isFocused?: InputMaybe<OrderBy>;
  process?: InputMaybe<ProcessesOrderBy>;
  processId?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: event_windows */
export type EventWindowsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "event_windows" */
export enum EventWindowsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  IsFocused = 'isFocused',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "event_windows" */
export type EventWindowsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isFocused?: InputMaybe<Scalars['Boolean']>;
  processId?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "event_windows" */
export enum EventWindowsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  IsFocused = 'isFocused',
  /** column name */
  ProcessId = 'processId',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type EventWindowsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventWindowsSetInput>;
  where: EventWindowsBoolExp;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'Events';
  createdAt: Scalars['timestamptz'];
  duration: Scalars['Int'];
  /** An array relationship */
  eventFiles: Array<EventFile>;
  /** An aggregate relationship */
  eventFilesAggregate: EventFileAggregate;
  /** An array relationship */
  eventWindows: Array<EventWindows>;
  /** An aggregate relationship */
  eventWindowsAggregate: EventWindowsAggregate;
  /** An object relationship */
  event_network?: Maybe<EventNetwork>;
  id: Scalars['uuid'];
  keystrokes?: Maybe<Scalars['Int']>;
  mouseClicks?: Maybe<Scalars['Int']>;
  /** An object relationship */
  rule: Rules;
  ruleId: Scalars['uuid'];
  secondsSinceLastInput: Scalars['Int'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "events" */
export type EventsEventFilesArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


/** columns and relationships of "events" */
export type EventsEventFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


/** columns and relationships of "events" */
export type EventsEventWindowsArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


/** columns and relationships of "events" */
export type EventsEventWindowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};

/** aggregated selection of "events" */
export type EventsAggregate = {
  __typename?: 'EventsAggregate';
  aggregate?: Maybe<EventsAggregateFields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type EventsAggregateFields = {
  __typename?: 'EventsAggregateFields';
  avg?: Maybe<EventsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<EventsMaxFields>;
  min?: Maybe<EventsMinFields>;
  stddev?: Maybe<EventsStddevFields>;
  stddevPop?: Maybe<EventsStddev_PopFields>;
  stddevSamp?: Maybe<EventsStddev_SampFields>;
  sum?: Maybe<EventsSumFields>;
  varPop?: Maybe<EventsVar_PopFields>;
  varSamp?: Maybe<EventsVar_SampFields>;
  variance?: Maybe<EventsVarianceFields>;
};


/** aggregate fields of "events" */
export type EventsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "events" */
export type EventsAggregateOrderBy = {
  avg?: InputMaybe<Events_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Events_Max_Order_By>;
  min?: InputMaybe<Events_Min_Order_By>;
  stddev?: InputMaybe<Events_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Events_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Events_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Events_Sum_Order_By>;
  var_pop?: InputMaybe<Events_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Events_Var_Samp_Order_By>;
  variance?: InputMaybe<Events_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "events" */
export type EventsArrRelInsertInput = {
  data: Array<EventsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<EventsOnConflict>;
};

/** aggregate avg on columns */
export type EventsAvgFields = {
  __typename?: 'EventsAvgFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type EventsBoolExp = {
  _and?: InputMaybe<Array<EventsBoolExp>>;
  _not?: InputMaybe<EventsBoolExp>;
  _or?: InputMaybe<Array<EventsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  duration?: InputMaybe<IntComparisonExp>;
  eventFiles?: InputMaybe<EventFileBoolExp>;
  eventWindows?: InputMaybe<EventWindowsBoolExp>;
  event_network?: InputMaybe<EventNetworkBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  keystrokes?: InputMaybe<IntComparisonExp>;
  mouseClicks?: InputMaybe<IntComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  ruleId?: InputMaybe<UuidComparisonExp>;
  secondsSinceLastInput?: InputMaybe<IntComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "events" */
export enum EventsConstraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** input type for incrementing numeric columns in table "events" */
export type EventsIncInput = {
  duration?: InputMaybe<Scalars['Int']>;
  keystrokes?: InputMaybe<Scalars['Int']>;
  mouseClicks?: InputMaybe<Scalars['Int']>;
  secondsSinceLastInput?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "events" */
export type EventsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  duration?: InputMaybe<Scalars['Int']>;
  eventFiles?: InputMaybe<EventFileArrRelInsertInput>;
  eventWindows?: InputMaybe<EventWindowsArrRelInsertInput>;
  event_network?: InputMaybe<EventNetworkObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  keystrokes?: InputMaybe<Scalars['Int']>;
  mouseClicks?: InputMaybe<Scalars['Int']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  secondsSinceLastInput?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type EventsMaxFields = {
  __typename?: 'EventsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  keystrokes?: Maybe<Scalars['Int']>;
  mouseClicks?: Maybe<Scalars['Int']>;
  ruleId?: Maybe<Scalars['uuid']>;
  secondsSinceLastInput?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type EventsMinFields = {
  __typename?: 'EventsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  keystrokes?: Maybe<Scalars['Int']>;
  mouseClicks?: Maybe<Scalars['Int']>;
  ruleId?: Maybe<Scalars['uuid']>;
  secondsSinceLastInput?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "events" */
export type EventsMutationResponse = {
  __typename?: 'EventsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type EventsObjRelInsertInput = {
  data: EventsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<EventsOnConflict>;
};

/** on_conflict condition type for table "events" */
export type EventsOnConflict = {
  constraint: EventsConstraint;
  update_columns?: Array<EventsUpdateColumn>;
  where?: InputMaybe<EventsBoolExp>;
};

/** Ordering options when selecting data from "events". */
export type EventsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  duration?: InputMaybe<OrderBy>;
  eventFilesAggregate?: InputMaybe<EventFileAggregateOrderBy>;
  eventWindowsAggregate?: InputMaybe<EventWindowsAggregateOrderBy>;
  event_network?: InputMaybe<EventNetworkOrderBy>;
  id?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: events */
export type EventsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "events" */
export enum EventsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Keystrokes = 'keystrokes',
  /** column name */
  MouseClicks = 'mouseClicks',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  SecondsSinceLastInput = 'secondsSinceLastInput',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "events" */
export type EventsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  keystrokes?: InputMaybe<Scalars['Int']>;
  mouseClicks?: InputMaybe<Scalars['Int']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  secondsSinceLastInput?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type EventsStddevFields = {
  __typename?: 'EventsStddevFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type EventsStddev_PopFields = {
  __typename?: 'EventsStddev_popFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type EventsStddev_SampFields = {
  __typename?: 'EventsStddev_sampFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type EventsSumFields = {
  __typename?: 'EventsSumFields';
  duration?: Maybe<Scalars['Int']>;
  keystrokes?: Maybe<Scalars['Int']>;
  mouseClicks?: Maybe<Scalars['Int']>;
  secondsSinceLastInput?: Maybe<Scalars['Int']>;
};

/** update columns of table "events" */
export enum EventsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Keystrokes = 'keystrokes',
  /** column name */
  MouseClicks = 'mouseClicks',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  SecondsSinceLastInput = 'secondsSinceLastInput',
  /** column name */
  UserId = 'userId'
}

export type EventsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<EventsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventsSetInput>;
  where: EventsBoolExp;
};

/** aggregate var_pop on columns */
export type EventsVar_PopFields = {
  __typename?: 'EventsVar_popFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type EventsVar_SampFields = {
  __typename?: 'EventsVar_sampFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type EventsVarianceFields = {
  __typename?: 'EventsVarianceFields';
  duration?: Maybe<Scalars['Float']>;
  keystrokes?: Maybe<Scalars['Float']>;
  mouseClicks?: Maybe<Scalars['Float']>;
  secondsSinceLastInput?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "networks" */
export type Networks = {
  __typename?: 'Networks';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  employeeNetworks: Array<UserNetworks>;
  /** An aggregate relationship */
  employeeNetworksAggregate: UserNetworksAggregate;
  /** An aggregate relationship */
  eventNetworksAggregate: EventNetworkAggregate;
  /** An array relationship */
  event_networks: Array<EventNetwork>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "networks" */
export type NetworksEmployeeNetworksArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


/** columns and relationships of "networks" */
export type NetworksEmployeeNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


/** columns and relationships of "networks" */
export type NetworksEventNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


/** columns and relationships of "networks" */
export type NetworksEvent_NetworksArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};

/** aggregated selection of "networks" */
export type NetworksAggregate = {
  __typename?: 'NetworksAggregate';
  aggregate?: Maybe<NetworksAggregateFields>;
  nodes: Array<Networks>;
};

/** aggregate fields of "networks" */
export type NetworksAggregateFields = {
  __typename?: 'NetworksAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<NetworksMaxFields>;
  min?: Maybe<NetworksMinFields>;
};


/** aggregate fields of "networks" */
export type NetworksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NetworksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "networks". All fields are combined with a logical 'AND'. */
export type NetworksBoolExp = {
  _and?: InputMaybe<Array<NetworksBoolExp>>;
  _not?: InputMaybe<NetworksBoolExp>;
  _or?: InputMaybe<Array<NetworksBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  employeeNetworks?: InputMaybe<UserNetworksBoolExp>;
  event_networks?: InputMaybe<EventNetworkBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "networks" */
export enum NetworksConstraint {
  /** unique or primary key constraint on columns "id" */
  NetworksPkey = 'networks_pkey'
}

/** input type for inserting data into table "networks" */
export type NetworksInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  employeeNetworks?: InputMaybe<UserNetworksArrRelInsertInput>;
  event_networks?: InputMaybe<EventNetworkArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type NetworksMaxFields = {
  __typename?: 'NetworksMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type NetworksMinFields = {
  __typename?: 'NetworksMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "networks" */
export type NetworksMutationResponse = {
  __typename?: 'NetworksMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Networks>;
};

/** input type for inserting object relation for remote table "networks" */
export type NetworksObjRelInsertInput = {
  data: NetworksInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<NetworksOnConflict>;
};

/** on_conflict condition type for table "networks" */
export type NetworksOnConflict = {
  constraint: NetworksConstraint;
  update_columns?: Array<NetworksUpdateColumn>;
  where?: InputMaybe<NetworksBoolExp>;
};

/** Ordering options when selecting data from "networks". */
export type NetworksOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  employeeNetworksAggregate?: InputMaybe<UserNetworksAggregateOrderBy>;
  event_networksAggregate?: InputMaybe<EventNetworkAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: networks */
export type NetworksPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "networks" */
export enum NetworksSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "networks" */
export type NetworksSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "networks" */
export enum NetworksUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type NetworksUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NetworksSetInput>;
  where: NetworksBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "organization_departments" */
export type OrganizationDepartments = {
  __typename?: 'OrganizationDepartments';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
};

/** aggregated selection of "organization_departments" */
export type OrganizationDepartmentsAggregate = {
  __typename?: 'OrganizationDepartmentsAggregate';
  aggregate?: Maybe<OrganizationDepartmentsAggregateFields>;
  nodes: Array<OrganizationDepartments>;
};

/** aggregate fields of "organization_departments" */
export type OrganizationDepartmentsAggregateFields = {
  __typename?: 'OrganizationDepartmentsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationDepartmentsMaxFields>;
  min?: Maybe<OrganizationDepartmentsMinFields>;
};


/** aggregate fields of "organization_departments" */
export type OrganizationDepartmentsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_departments" */
export type OrganizationDepartmentsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Organization_Departments_Max_Order_By>;
  min?: InputMaybe<Organization_Departments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization_departments" */
export type OrganizationDepartmentsArrRelInsertInput = {
  data: Array<OrganizationDepartmentsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrganizationDepartmentsOnConflict>;
};

/** Boolean expression to filter rows from the table "organization_departments". All fields are combined with a logical 'AND'. */
export type OrganizationDepartmentsBoolExp = {
  _and?: InputMaybe<Array<OrganizationDepartmentsBoolExp>>;
  _not?: InputMaybe<OrganizationDepartmentsBoolExp>;
  _or?: InputMaybe<Array<OrganizationDepartmentsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organizationId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "organization_departments" */
export enum OrganizationDepartmentsConstraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationDepartmentsPkey = 'organization_departments_pkey'
}

/** input type for inserting data into table "organization_departments" */
export type OrganizationDepartmentsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organizationId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrganizationDepartmentsMaxFields = {
  __typename?: 'OrganizationDepartmentsMaxFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type OrganizationDepartmentsMinFields = {
  __typename?: 'OrganizationDepartmentsMinFields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "organization_departments" */
export type OrganizationDepartmentsMutationResponse = {
  __typename?: 'OrganizationDepartmentsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationDepartments>;
};

/** on_conflict condition type for table "organization_departments" */
export type OrganizationDepartmentsOnConflict = {
  constraint: OrganizationDepartmentsConstraint;
  update_columns?: Array<OrganizationDepartmentsUpdateColumn>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};

/** Ordering options when selecting data from "organization_departments". */
export type OrganizationDepartmentsOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organizationId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: organization_departments */
export type OrganizationDepartmentsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "organization_departments" */
export enum OrganizationDepartmentsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "organization_departments" */
export type OrganizationDepartmentsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "organization_departments" */
export enum OrganizationDepartmentsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId'
}

export type OrganizationDepartmentsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationDepartmentsSetInput>;
  where: OrganizationDepartmentsBoolExp;
};

/** columns and relationships of "organization_project" */
export type OrganizationProject = {
  __typename?: 'OrganizationProject';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  projectId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "organization_project" */
export type OrganizationProjectAggregate = {
  __typename?: 'OrganizationProjectAggregate';
  aggregate?: Maybe<OrganizationProjectAggregateFields>;
  nodes: Array<OrganizationProject>;
};

/** aggregate fields of "organization_project" */
export type OrganizationProjectAggregateFields = {
  __typename?: 'OrganizationProjectAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationProjectMaxFields>;
  min?: Maybe<OrganizationProjectMinFields>;
};


/** aggregate fields of "organization_project" */
export type OrganizationProjectAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_project" */
export type OrganizationProjectAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Organization_Project_Max_Order_By>;
  min?: InputMaybe<Organization_Project_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization_project" */
export type OrganizationProjectArrRelInsertInput = {
  data: Array<OrganizationProjectInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrganizationProjectOnConflict>;
};

/** Boolean expression to filter rows from the table "organization_project". All fields are combined with a logical 'AND'. */
export type OrganizationProjectBoolExp = {
  _and?: InputMaybe<Array<OrganizationProjectBoolExp>>;
  _not?: InputMaybe<OrganizationProjectBoolExp>;
  _or?: InputMaybe<Array<OrganizationProjectBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organizationId?: InputMaybe<UuidComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "organization_project" */
export enum OrganizationProjectConstraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationProjectPkey = 'organization_project_pkey'
}

/** input type for inserting data into table "organization_project" */
export type OrganizationProjectInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrganizationProjectMaxFields = {
  __typename?: 'OrganizationProjectMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationProjectMinFields = {
  __typename?: 'OrganizationProjectMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organization_project" */
export type OrganizationProjectMutationResponse = {
  __typename?: 'OrganizationProjectMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationProject>;
};

/** on_conflict condition type for table "organization_project" */
export type OrganizationProjectOnConflict = {
  constraint: OrganizationProjectConstraint;
  update_columns?: Array<OrganizationProjectUpdateColumn>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};

/** Ordering options when selecting data from "organization_project". */
export type OrganizationProjectOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: organization_project */
export type OrganizationProjectPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "organization_project" */
export enum OrganizationProjectSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organization_project" */
export type OrganizationProjectSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "organization_project" */
export enum OrganizationProjectUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type OrganizationProjectUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationProjectSetInput>;
  where: OrganizationProjectBoolExp;
};

/** columns and relationships of "organization_user" */
export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "organization_user" */
export type OrganizationUserAggregate = {
  __typename?: 'OrganizationUserAggregate';
  aggregate?: Maybe<OrganizationUserAggregateFields>;
  nodes: Array<OrganizationUser>;
};

/** aggregate fields of "organization_user" */
export type OrganizationUserAggregateFields = {
  __typename?: 'OrganizationUserAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationUserMaxFields>;
  min?: Maybe<OrganizationUserMinFields>;
};


/** aggregate fields of "organization_user" */
export type OrganizationUserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organization_user" */
export type OrganizationUserAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Organization_User_Max_Order_By>;
  min?: InputMaybe<Organization_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organization_user" */
export type OrganizationUserArrRelInsertInput = {
  data: Array<OrganizationUserInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrganizationUserOnConflict>;
};

/** Boolean expression to filter rows from the table "organization_user". All fields are combined with a logical 'AND'. */
export type OrganizationUserBoolExp = {
  _and?: InputMaybe<Array<OrganizationUserBoolExp>>;
  _not?: InputMaybe<OrganizationUserBoolExp>;
  _or?: InputMaybe<Array<OrganizationUserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organizationId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "organization_user" */
export enum OrganizationUserConstraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationEmployeePkey = 'organization_employee_pkey'
}

/** input type for inserting data into table "organization_user" */
export type OrganizationUserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrganizationUserMaxFields = {
  __typename?: 'OrganizationUserMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type OrganizationUserMinFields = {
  __typename?: 'OrganizationUserMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "organization_user" */
export type OrganizationUserMutationResponse = {
  __typename?: 'OrganizationUserMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationUser>;
};

/** on_conflict condition type for table "organization_user" */
export type OrganizationUserOnConflict = {
  constraint: OrganizationUserConstraint;
  update_columns?: Array<OrganizationUserUpdateColumn>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};

/** Ordering options when selecting data from "organization_user". */
export type OrganizationUserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: organization_user */
export type OrganizationUserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "organization_user" */
export enum OrganizationUserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "organization_user" */
export type OrganizationUserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "organization_user" */
export enum OrganizationUserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type OrganizationUserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationUserSetInput>;
  where: OrganizationUserBoolExp;
};

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'Organizations';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  organizationDepartments: Array<OrganizationDepartments>;
  /** An aggregate relationship */
  organizationDepartmentsAggregate: OrganizationDepartmentsAggregate;
  /** An array relationship */
  organizationEmployees: Array<OrganizationUser>;
  /** An aggregate relationship */
  organizationEmployeesAggregate: OrganizationUserAggregate;
  /** An array relationship */
  organizationProjects: Array<OrganizationProject>;
  /** An aggregate relationship */
  organizationProjectsAggregate: OrganizationProjectAggregate;
  /** An array relationship */
  organizationsTeams: Array<OrganizationsTeam>;
  /** An aggregate relationship */
  organizationsTeamsAggregate: OrganizationsTeamAggregate;
  primaryColor?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userOrganizations: Array<UserOrganization>;
  /** An aggregate relationship */
  userOrganizationsAggregate: UserOrganizationAggregate;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationDepartmentsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationDepartmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationEmployeesArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationEmployeesAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationProjectsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationsTeamsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsOrganizationsTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsUserOrganizationsArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsUserOrganizationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};

/** aggregated selection of "organizations" */
export type OrganizationsAggregate = {
  __typename?: 'OrganizationsAggregate';
  aggregate?: Maybe<OrganizationsAggregateFields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type OrganizationsAggregateFields = {
  __typename?: 'OrganizationsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationsMaxFields>;
  min?: Maybe<OrganizationsMinFields>;
};


/** aggregate fields of "organizations" */
export type OrganizationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type OrganizationsBoolExp = {
  _and?: InputMaybe<Array<OrganizationsBoolExp>>;
  _not?: InputMaybe<OrganizationsBoolExp>;
  _or?: InputMaybe<Array<OrganizationsBoolExp>>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  organizationDepartments?: InputMaybe<OrganizationDepartmentsBoolExp>;
  organizationEmployees?: InputMaybe<OrganizationUserBoolExp>;
  organizationProjects?: InputMaybe<OrganizationProjectBoolExp>;
  organizationsTeams?: InputMaybe<OrganizationsTeamBoolExp>;
  primaryColor?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userOrganizations?: InputMaybe<UserOrganizationBoolExp>;
};

/** unique or primary key constraints on table "organizations" */
export enum OrganizationsConstraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type OrganizationsInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organizationDepartments?: InputMaybe<OrganizationDepartmentsArrRelInsertInput>;
  organizationEmployees?: InputMaybe<OrganizationUserArrRelInsertInput>;
  organizationProjects?: InputMaybe<OrganizationProjectArrRelInsertInput>;
  organizationsTeams?: InputMaybe<OrganizationsTeamArrRelInsertInput>;
  primaryColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userOrganizations?: InputMaybe<UserOrganizationArrRelInsertInput>;
};

/** aggregate max on columns */
export type OrganizationsMaxFields = {
  __typename?: 'OrganizationsMaxFields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationsMinFields = {
  __typename?: 'OrganizationsMinFields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizations" */
export type OrganizationsMutationResponse = {
  __typename?: 'OrganizationsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type OrganizationsObjRelInsertInput = {
  data: OrganizationsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<OrganizationsOnConflict>;
};

/** on_conflict condition type for table "organizations" */
export type OrganizationsOnConflict = {
  constraint: OrganizationsConstraint;
  update_columns?: Array<OrganizationsUpdateColumn>;
  where?: InputMaybe<OrganizationsBoolExp>;
};

/** Ordering options when selecting data from "organizations". */
export type OrganizationsOrderBy = {
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organizationDepartmentsAggregate?: InputMaybe<OrganizationDepartmentsAggregateOrderBy>;
  organizationEmployeesAggregate?: InputMaybe<OrganizationUserAggregateOrderBy>;
  organizationProjectsAggregate?: InputMaybe<OrganizationProjectAggregateOrderBy>;
  organizationsTeamsAggregate?: InputMaybe<OrganizationsTeamAggregateOrderBy>;
  primaryColor?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userOrganizationsAggregate?: InputMaybe<UserOrganizationAggregateOrderBy>;
};

/** primary key columns input for table: organizations */
export type OrganizationsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "organizations" */
export enum OrganizationsSelectColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrimaryColor = 'primaryColor',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organizations" */
export type OrganizationsSetInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "organizations_team" */
export type OrganizationsTeam = {
  __typename?: 'OrganizationsTeam';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "organizations_team" */
export type OrganizationsTeamAggregate = {
  __typename?: 'OrganizationsTeamAggregate';
  aggregate?: Maybe<OrganizationsTeamAggregateFields>;
  nodes: Array<OrganizationsTeam>;
};

/** aggregate fields of "organizations_team" */
export type OrganizationsTeamAggregateFields = {
  __typename?: 'OrganizationsTeamAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationsTeamMaxFields>;
  min?: Maybe<OrganizationsTeamMinFields>;
};


/** aggregate fields of "organizations_team" */
export type OrganizationsTeamAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organizations_team" */
export type OrganizationsTeamAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Organizations_Team_Max_Order_By>;
  min?: InputMaybe<Organizations_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organizations_team" */
export type OrganizationsTeamArrRelInsertInput = {
  data: Array<OrganizationsTeamInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<OrganizationsTeamOnConflict>;
};

/** Boolean expression to filter rows from the table "organizations_team". All fields are combined with a logical 'AND'. */
export type OrganizationsTeamBoolExp = {
  _and?: InputMaybe<Array<OrganizationsTeamBoolExp>>;
  _not?: InputMaybe<OrganizationsTeamBoolExp>;
  _or?: InputMaybe<Array<OrganizationsTeamBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organizationId?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "organizations_team" */
export enum OrganizationsTeamConstraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsTeamPkey = 'organizations_team_pkey'
}

/** input type for inserting data into table "organizations_team" */
export type OrganizationsTeamInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrganizationsTeamMaxFields = {
  __typename?: 'OrganizationsTeamMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationsTeamMinFields = {
  __typename?: 'OrganizationsTeamMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizations_team" */
export type OrganizationsTeamMutationResponse = {
  __typename?: 'OrganizationsTeamMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationsTeam>;
};

/** on_conflict condition type for table "organizations_team" */
export type OrganizationsTeamOnConflict = {
  constraint: OrganizationsTeamConstraint;
  update_columns?: Array<OrganizationsTeamUpdateColumn>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};

/** Ordering options when selecting data from "organizations_team". */
export type OrganizationsTeamOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: organizations_team */
export type OrganizationsTeamPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "organizations_team" */
export enum OrganizationsTeamSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organizations_team" */
export type OrganizationsTeamSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "organizations_team" */
export enum OrganizationsTeamUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type OrganizationsTeamUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationsTeamSetInput>;
  where: OrganizationsTeamBoolExp;
};

/** update columns of table "organizations" */
export enum OrganizationsUpdateColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrimaryColor = 'primaryColor',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type OrganizationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationsSetInput>;
  where: OrganizationsBoolExp;
};

/** columns and relationships of "processes" */
export type Processes = {
  __typename?: 'Processes';
  cmd: Scalars['String'];
  cpuUsage: Scalars['float8'];
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  eventWindows: Array<EventWindows>;
  /** An aggregate relationship */
  eventWindowsAggregate: EventWindowsAggregate;
  exe: Scalars['String'];
  id: Scalars['uuid'];
  memory: Scalars['Int'];
  name: Scalars['String'];
  startTime: Scalars['Int'];
  status: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "processes" */
export type ProcessesEventWindowsArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


/** columns and relationships of "processes" */
export type ProcessesEventWindowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};

/** aggregated selection of "processes" */
export type ProcessesAggregate = {
  __typename?: 'ProcessesAggregate';
  aggregate?: Maybe<ProcessesAggregateFields>;
  nodes: Array<Processes>;
};

/** aggregate fields of "processes" */
export type ProcessesAggregateFields = {
  __typename?: 'ProcessesAggregateFields';
  avg?: Maybe<ProcessesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ProcessesMaxFields>;
  min?: Maybe<ProcessesMinFields>;
  stddev?: Maybe<ProcessesStddevFields>;
  stddevPop?: Maybe<ProcessesStddev_PopFields>;
  stddevSamp?: Maybe<ProcessesStddev_SampFields>;
  sum?: Maybe<ProcessesSumFields>;
  varPop?: Maybe<ProcessesVar_PopFields>;
  varSamp?: Maybe<ProcessesVar_SampFields>;
  variance?: Maybe<ProcessesVarianceFields>;
};


/** aggregate fields of "processes" */
export type ProcessesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProcessesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type ProcessesAvgFields = {
  __typename?: 'ProcessesAvgFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "processes". All fields are combined with a logical 'AND'. */
export type ProcessesBoolExp = {
  _and?: InputMaybe<Array<ProcessesBoolExp>>;
  _not?: InputMaybe<ProcessesBoolExp>;
  _or?: InputMaybe<Array<ProcessesBoolExp>>;
  cmd?: InputMaybe<StringComparisonExp>;
  cpuUsage?: InputMaybe<Float8ComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  eventWindows?: InputMaybe<EventWindowsBoolExp>;
  exe?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  memory?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  startTime?: InputMaybe<IntComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "processes" */
export enum ProcessesConstraint {
  /** unique or primary key constraint on columns "id" */
  ProcessesPkey = 'processes_pkey'
}

/** input type for incrementing numeric columns in table "processes" */
export type ProcessesIncInput = {
  cpuUsage?: InputMaybe<Scalars['float8']>;
  memory?: InputMaybe<Scalars['Int']>;
  startTime?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "processes" */
export type ProcessesInsertInput = {
  cmd?: InputMaybe<Scalars['String']>;
  cpuUsage?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventWindows?: InputMaybe<EventWindowsArrRelInsertInput>;
  exe?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  memory?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProcessesMaxFields = {
  __typename?: 'ProcessesMaxFields';
  cmd?: Maybe<Scalars['String']>;
  cpuUsage?: Maybe<Scalars['float8']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  exe?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  memory?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ProcessesMinFields = {
  __typename?: 'ProcessesMinFields';
  cmd?: Maybe<Scalars['String']>;
  cpuUsage?: Maybe<Scalars['float8']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  exe?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  memory?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "processes" */
export type ProcessesMutationResponse = {
  __typename?: 'ProcessesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Processes>;
};

/** input type for inserting object relation for remote table "processes" */
export type ProcessesObjRelInsertInput = {
  data: ProcessesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProcessesOnConflict>;
};

/** on_conflict condition type for table "processes" */
export type ProcessesOnConflict = {
  constraint: ProcessesConstraint;
  update_columns?: Array<ProcessesUpdateColumn>;
  where?: InputMaybe<ProcessesBoolExp>;
};

/** Ordering options when selecting data from "processes". */
export type ProcessesOrderBy = {
  cmd?: InputMaybe<OrderBy>;
  cpuUsage?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  eventWindowsAggregate?: InputMaybe<EventWindowsAggregateOrderBy>;
  exe?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memory?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  startTime?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: processes */
export type ProcessesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "processes" */
export enum ProcessesSelectColumn {
  /** column name */
  Cmd = 'cmd',
  /** column name */
  CpuUsage = 'cpuUsage',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Exe = 'exe',
  /** column name */
  Id = 'id',
  /** column name */
  Memory = 'memory',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "processes" */
export type ProcessesSetInput = {
  cmd?: InputMaybe<Scalars['String']>;
  cpuUsage?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exe?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  memory?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ProcessesStddevFields = {
  __typename?: 'ProcessesStddevFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type ProcessesStddev_PopFields = {
  __typename?: 'ProcessesStddev_popFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type ProcessesStddev_SampFields = {
  __typename?: 'ProcessesStddev_sampFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type ProcessesSumFields = {
  __typename?: 'ProcessesSumFields';
  cpuUsage?: Maybe<Scalars['float8']>;
  memory?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Int']>;
};

/** update columns of table "processes" */
export enum ProcessesUpdateColumn {
  /** column name */
  Cmd = 'cmd',
  /** column name */
  CpuUsage = 'cpuUsage',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Exe = 'exe',
  /** column name */
  Id = 'id',
  /** column name */
  Memory = 'memory',
  /** column name */
  Name = 'name',
  /** column name */
  StartTime = 'startTime',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ProcessesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProcessesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProcessesSetInput>;
  where: ProcessesBoolExp;
};

/** aggregate var_pop on columns */
export type ProcessesVar_PopFields = {
  __typename?: 'ProcessesVar_popFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type ProcessesVar_SampFields = {
  __typename?: 'ProcessesVar_sampFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type ProcessesVarianceFields = {
  __typename?: 'ProcessesVarianceFields';
  cpuUsage?: Maybe<Scalars['Float']>;
  memory?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "project_team" */
export type ProjectTeam = {
  __typename?: 'ProjectTeam';
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  projectId: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['uuid'];
};

/** aggregated selection of "project_team" */
export type ProjectTeamAggregate = {
  __typename?: 'ProjectTeamAggregate';
  aggregate?: Maybe<ProjectTeamAggregateFields>;
  nodes: Array<ProjectTeam>;
};

/** aggregate fields of "project_team" */
export type ProjectTeamAggregateFields = {
  __typename?: 'ProjectTeamAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ProjectTeamMaxFields>;
  min?: Maybe<ProjectTeamMinFields>;
};


/** aggregate fields of "project_team" */
export type ProjectTeamAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_team" */
export type ProjectTeamAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Project_Team_Max_Order_By>;
  min?: InputMaybe<Project_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_team" */
export type ProjectTeamArrRelInsertInput = {
  data: Array<ProjectTeamInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectTeamOnConflict>;
};

/** Boolean expression to filter rows from the table "project_team". All fields are combined with a logical 'AND'. */
export type ProjectTeamBoolExp = {
  _and?: InputMaybe<Array<ProjectTeamBoolExp>>;
  _not?: InputMaybe<ProjectTeamBoolExp>;
  _or?: InputMaybe<Array<ProjectTeamBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "project_team" */
export enum ProjectTeamConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectTeamPkey = 'project_team_pkey'
}

/** input type for inserting data into table "project_team" */
export type ProjectTeamInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ProjectTeamMaxFields = {
  __typename?: 'ProjectTeamMaxFields';
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type ProjectTeamMinFields = {
  __typename?: 'ProjectTeamMinFields';
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "project_team" */
export type ProjectTeamMutationResponse = {
  __typename?: 'ProjectTeamMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectTeam>;
};

/** on_conflict condition type for table "project_team" */
export type ProjectTeamOnConflict = {
  constraint: ProjectTeamConstraint;
  update_columns?: Array<ProjectTeamUpdateColumn>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};

/** Ordering options when selecting data from "project_team". */
export type ProjectTeamOrderBy = {
  id?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_team */
export type ProjectTeamPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "project_team" */
export enum ProjectTeamSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "project_team" */
export type ProjectTeamSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "project_team" */
export enum ProjectTeamUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  TeamId = 'teamId'
}

export type ProjectTeamUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectTeamSetInput>;
  where: ProjectTeamBoolExp;
};

/** columns and relationships of "project_user" */
export type ProjectUser = {
  __typename?: 'ProjectUser';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  project: Projects;
  projectId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "project_user" */
export type ProjectUserAggregate = {
  __typename?: 'ProjectUserAggregate';
  aggregate?: Maybe<ProjectUserAggregateFields>;
  nodes: Array<ProjectUser>;
};

/** aggregate fields of "project_user" */
export type ProjectUserAggregateFields = {
  __typename?: 'ProjectUserAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ProjectUserMaxFields>;
  min?: Maybe<ProjectUserMinFields>;
};


/** aggregate fields of "project_user" */
export type ProjectUserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectUserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_user" */
export type ProjectUserAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Project_User_Max_Order_By>;
  min?: InputMaybe<Project_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_user" */
export type ProjectUserArrRelInsertInput = {
  data: Array<ProjectUserInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectUserOnConflict>;
};

/** Boolean expression to filter rows from the table "project_user". All fields are combined with a logical 'AND'. */
export type ProjectUserBoolExp = {
  _and?: InputMaybe<Array<ProjectUserBoolExp>>;
  _not?: InputMaybe<ProjectUserBoolExp>;
  _or?: InputMaybe<Array<ProjectUserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "project_user" */
export enum ProjectUserConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectEmployeePkey = 'project_employee_pkey'
}

/** input type for inserting data into table "project_user" */
export type ProjectUserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ProjectUserMaxFields = {
  __typename?: 'ProjectUserMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type ProjectUserMinFields = {
  __typename?: 'ProjectUserMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "project_user" */
export type ProjectUserMutationResponse = {
  __typename?: 'ProjectUserMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectUser>;
};

/** on_conflict condition type for table "project_user" */
export type ProjectUserOnConflict = {
  constraint: ProjectUserConstraint;
  update_columns?: Array<ProjectUserUpdateColumn>;
  where?: InputMaybe<ProjectUserBoolExp>;
};

/** Ordering options when selecting data from "project_user". */
export type ProjectUserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_user */
export type ProjectUserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "project_user" */
export enum ProjectUserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "project_user" */
export type ProjectUserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "project_user" */
export enum ProjectUserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type ProjectUserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectUserSetInput>;
  where: ProjectUserBoolExp;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'Projects';
  createdAt: Scalars['timestamptz'];
  externalId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  organizationProjects: Array<OrganizationProject>;
  /** An aggregate relationship */
  organizationProjectsAggregate: OrganizationProjectAggregate;
  /** An array relationship */
  projectEmployees: Array<ProjectUser>;
  /** An aggregate relationship */
  projectEmployeesAggregate: ProjectUserAggregate;
  /** An array relationship */
  projectTeams: Array<ProjectTeam>;
  /** An aggregate relationship */
  projectTeamsAggregate: ProjectTeamAggregate;
  /** An array relationship */
  rules: Array<Rules>;
  /** An aggregate relationship */
  rulesAggregate: RulesAggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "projects" */
export type ProjectsOrganizationProjectsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsOrganizationProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectEmployeesArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectEmployeesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectTeamsArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsRulesArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsRulesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};

/** aggregated selection of "projects" */
export type ProjectsAggregate = {
  __typename?: 'ProjectsAggregate';
  aggregate?: Maybe<ProjectsAggregateFields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type ProjectsAggregateFields = {
  __typename?: 'ProjectsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<ProjectsMaxFields>;
  min?: Maybe<ProjectsMinFields>;
};


/** aggregate fields of "projects" */
export type ProjectsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type ProjectsBoolExp = {
  _and?: InputMaybe<Array<ProjectsBoolExp>>;
  _not?: InputMaybe<ProjectsBoolExp>;
  _or?: InputMaybe<Array<ProjectsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  externalId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  organizationProjects?: InputMaybe<OrganizationProjectBoolExp>;
  projectEmployees?: InputMaybe<ProjectUserBoolExp>;
  projectTeams?: InputMaybe<ProjectTeamBoolExp>;
  rules?: InputMaybe<RulesBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "projects" */
export enum ProjectsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type ProjectsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organizationProjects?: InputMaybe<OrganizationProjectArrRelInsertInput>;
  projectEmployees?: InputMaybe<ProjectUserArrRelInsertInput>;
  projectTeams?: InputMaybe<ProjectTeamArrRelInsertInput>;
  rules?: InputMaybe<RulesArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ProjectsMaxFields = {
  __typename?: 'ProjectsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type ProjectsMinFields = {
  __typename?: 'ProjectsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "projects" */
export type ProjectsMutationResponse = {
  __typename?: 'ProjectsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type ProjectsObjRelInsertInput = {
  data: ProjectsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectsOnConflict>;
};

/** on_conflict condition type for table "projects" */
export type ProjectsOnConflict = {
  constraint: ProjectsConstraint;
  update_columns?: Array<ProjectsUpdateColumn>;
  where?: InputMaybe<ProjectsBoolExp>;
};

/** Ordering options when selecting data from "projects". */
export type ProjectsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  externalId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organizationProjectsAggregate?: InputMaybe<OrganizationProjectAggregateOrderBy>;
  projectEmployeesAggregate?: InputMaybe<ProjectUserAggregateOrderBy>;
  projectTeamsAggregate?: InputMaybe<ProjectTeamAggregateOrderBy>;
  rulesAggregate?: InputMaybe<RulesAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: projects */
export type ProjectsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum ProjectsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "projects" */
export type ProjectsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "projects" */
export enum ProjectsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ProjectsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectsSetInput>;
  where: ProjectsBoolExp;
};

/** columns and relationships of "rule_conditions" */
export type RuleConditions = {
  __typename?: 'RuleConditions';
  /** An object relationship */
  conditionFieldType?: Maybe<ConditionFieldType>;
  /** An object relationship */
  conditionOperatorType?: Maybe<ConditionOperatorType>;
  createdAt: Scalars['timestamptz'];
  fieldType?: Maybe<ConditionFieldTypeEnum>;
  id: Scalars['uuid'];
  isCaseSensitive?: Maybe<Scalars['Boolean']>;
  isSealed?: Maybe<Scalars['Boolean']>;
  operatorType?: Maybe<ConditionOperatorTypeEnum>;
  /** An object relationship */
  rule?: Maybe<Rules>;
  ruleId?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['timestamptz'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rule_conditions" */
export type RuleConditionsAggregate = {
  __typename?: 'RuleConditionsAggregate';
  aggregate?: Maybe<RuleConditionsAggregateFields>;
  nodes: Array<RuleConditions>;
};

/** aggregate fields of "rule_conditions" */
export type RuleConditionsAggregateFields = {
  __typename?: 'RuleConditionsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RuleConditionsMaxFields>;
  min?: Maybe<RuleConditionsMinFields>;
};


/** aggregate fields of "rule_conditions" */
export type RuleConditionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rule_conditions" */
export type RuleConditionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Rule_Conditions_Max_Order_By>;
  min?: InputMaybe<Rule_Conditions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rule_conditions" */
export type RuleConditionsArrRelInsertInput = {
  data: Array<RuleConditionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RuleConditionsOnConflict>;
};

/** Boolean expression to filter rows from the table "rule_conditions". All fields are combined with a logical 'AND'. */
export type RuleConditionsBoolExp = {
  _and?: InputMaybe<Array<RuleConditionsBoolExp>>;
  _not?: InputMaybe<RuleConditionsBoolExp>;
  _or?: InputMaybe<Array<RuleConditionsBoolExp>>;
  conditionFieldType?: InputMaybe<ConditionFieldTypeBoolExp>;
  conditionOperatorType?: InputMaybe<ConditionOperatorTypeBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  fieldType?: InputMaybe<ConditionFieldTypeEnumComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isCaseSensitive?: InputMaybe<BooleanComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  operatorType?: InputMaybe<ConditionOperatorTypeEnumComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  ruleId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rule_conditions" */
export enum RuleConditionsConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleConditionPkey = 'rule_condition_pkey'
}

/** input type for inserting data into table "rule_conditions" */
export type RuleConditionsInsertInput = {
  conditionFieldType?: InputMaybe<ConditionFieldTypeObjRelInsertInput>;
  conditionOperatorType?: InputMaybe<ConditionOperatorTypeObjRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fieldType?: InputMaybe<ConditionFieldTypeEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  isCaseSensitive?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  operatorType?: InputMaybe<ConditionOperatorTypeEnum>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RuleConditionsMaxFields = {
  __typename?: 'RuleConditionsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RuleConditionsMinFields = {
  __typename?: 'RuleConditionsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rule_conditions" */
export type RuleConditionsMutationResponse = {
  __typename?: 'RuleConditionsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleConditions>;
};

/** on_conflict condition type for table "rule_conditions" */
export type RuleConditionsOnConflict = {
  constraint: RuleConditionsConstraint;
  update_columns?: Array<RuleConditionsUpdateColumn>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};

/** Ordering options when selecting data from "rule_conditions". */
export type RuleConditionsOrderBy = {
  conditionFieldType?: InputMaybe<ConditionFieldTypeOrderBy>;
  conditionOperatorType?: InputMaybe<ConditionOperatorTypeOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  fieldType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isCaseSensitive?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  operatorType?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_conditions */
export type RuleConditionsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_conditions" */
export enum RuleConditionsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FieldType = 'fieldType',
  /** column name */
  Id = 'id',
  /** column name */
  IsCaseSensitive = 'isCaseSensitive',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  OperatorType = 'operatorType',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rule_conditions" */
export type RuleConditionsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fieldType?: InputMaybe<ConditionFieldTypeEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  isCaseSensitive?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  operatorType?: InputMaybe<ConditionOperatorTypeEnum>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rule_conditions" */
export enum RuleConditionsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FieldType = 'fieldType',
  /** column name */
  Id = 'id',
  /** column name */
  IsCaseSensitive = 'isCaseSensitive',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  OperatorType = 'operatorType',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type RuleConditionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleConditionsSetInput>;
  where: RuleConditionsBoolExp;
};

/** columns and relationships of "rule_disposable" */
export type RuleDisposable = {
  __typename?: 'RuleDisposable';
  id: Scalars['uuid'];
  isSealed?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  rule: Rules;
};

/** aggregated selection of "rule_disposable" */
export type RuleDisposableAggregate = {
  __typename?: 'RuleDisposableAggregate';
  aggregate?: Maybe<RuleDisposableAggregateFields>;
  nodes: Array<RuleDisposable>;
};

/** aggregate fields of "rule_disposable" */
export type RuleDisposableAggregateFields = {
  __typename?: 'RuleDisposableAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RuleDisposableMaxFields>;
  min?: Maybe<RuleDisposableMinFields>;
};


/** aggregate fields of "rule_disposable" */
export type RuleDisposableAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleDisposableSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rule_disposable". All fields are combined with a logical 'AND'. */
export type RuleDisposableBoolExp = {
  _and?: InputMaybe<Array<RuleDisposableBoolExp>>;
  _not?: InputMaybe<RuleDisposableBoolExp>;
  _or?: InputMaybe<Array<RuleDisposableBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
};

/** unique or primary key constraints on table "rule_disposable" */
export enum RuleDisposableConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleDisposablePkey = 'rule_disposable_pkey'
}

/** input type for inserting data into table "rule_disposable" */
export type RuleDisposableInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
};

/** aggregate max on columns */
export type RuleDisposableMaxFields = {
  __typename?: 'RuleDisposableMaxFields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type RuleDisposableMinFields = {
  __typename?: 'RuleDisposableMinFields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "rule_disposable" */
export type RuleDisposableMutationResponse = {
  __typename?: 'RuleDisposableMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleDisposable>;
};

/** input type for inserting object relation for remote table "rule_disposable" */
export type RuleDisposableObjRelInsertInput = {
  data: RuleDisposableInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RuleDisposableOnConflict>;
};

/** on_conflict condition type for table "rule_disposable" */
export type RuleDisposableOnConflict = {
  constraint: RuleDisposableConstraint;
  update_columns?: Array<RuleDisposableUpdateColumn>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};

/** Ordering options when selecting data from "rule_disposable". */
export type RuleDisposableOrderBy = {
  id?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
};

/** primary key columns input for table: rule_disposable */
export type RuleDisposablePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_disposable" */
export enum RuleDisposableSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed'
}

/** input type for updating data in table "rule_disposable" */
export type RuleDisposableSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "rule_disposable" */
export enum RuleDisposableUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed'
}

export type RuleDisposableUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleDisposableSetInput>;
  where: RuleDisposableBoolExp;
};

/** columns and relationships of "rule_email" */
export type RuleEmail = {
  __typename?: 'RuleEmail';
  body?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isBounced?: Maybe<Scalars['Boolean']>;
  isSealed?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  rule: Rules;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "rule_email" */
export type RuleEmailAggregate = {
  __typename?: 'RuleEmailAggregate';
  aggregate?: Maybe<RuleEmailAggregateFields>;
  nodes: Array<RuleEmail>;
};

/** aggregate fields of "rule_email" */
export type RuleEmailAggregateFields = {
  __typename?: 'RuleEmailAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RuleEmailMaxFields>;
  min?: Maybe<RuleEmailMinFields>;
};


/** aggregate fields of "rule_email" */
export type RuleEmailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleEmailSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rule_email". All fields are combined with a logical 'AND'. */
export type RuleEmailBoolExp = {
  _and?: InputMaybe<Array<RuleEmailBoolExp>>;
  _not?: InputMaybe<RuleEmailBoolExp>;
  _or?: InputMaybe<Array<RuleEmailBoolExp>>;
  body?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isBounced?: InputMaybe<BooleanComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  subject?: InputMaybe<StringComparisonExp>;
  to?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "rule_email" */
export enum RuleEmailConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleEmailPkey = 'rule_email_pkey'
}

/** input type for inserting data into table "rule_email" */
export type RuleEmailInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isBounced?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  subject?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type RuleEmailMaxFields = {
  __typename?: 'RuleEmailMaxFields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type RuleEmailMinFields = {
  __typename?: 'RuleEmailMinFields';
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rule_email" */
export type RuleEmailMutationResponse = {
  __typename?: 'RuleEmailMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleEmail>;
};

/** input type for inserting object relation for remote table "rule_email" */
export type RuleEmailObjRelInsertInput = {
  data: RuleEmailInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RuleEmailOnConflict>;
};

/** on_conflict condition type for table "rule_email" */
export type RuleEmailOnConflict = {
  constraint: RuleEmailConstraint;
  update_columns?: Array<RuleEmailUpdateColumn>;
  where?: InputMaybe<RuleEmailBoolExp>;
};

/** Ordering options when selecting data from "rule_email". */
export type RuleEmailOrderBy = {
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isBounced?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  subject?: InputMaybe<OrderBy>;
  to?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_email */
export type RuleEmailPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_email" */
export enum RuleEmailSelectColumn {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsBounced = 'isBounced',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Subject = 'subject',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "rule_email" */
export type RuleEmailSetInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isBounced?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  subject?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rule_email" */
export enum RuleEmailUpdateColumn {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsBounced = 'isBounced',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Subject = 'subject',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type RuleEmailUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleEmailSetInput>;
  where: RuleEmailBoolExp;
};

/** columns and relationships of "rule_popup" */
export type RulePopup = {
  __typename?: 'RulePopup';
  id: Scalars['uuid'];
  isSealed?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  rule: Rules;
  text?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rule_popup" */
export type RulePopupAggregate = {
  __typename?: 'RulePopupAggregate';
  aggregate?: Maybe<RulePopupAggregateFields>;
  nodes: Array<RulePopup>;
};

/** aggregate fields of "rule_popup" */
export type RulePopupAggregateFields = {
  __typename?: 'RulePopupAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RulePopupMaxFields>;
  min?: Maybe<RulePopupMinFields>;
};


/** aggregate fields of "rule_popup" */
export type RulePopupAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RulePopupSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rule_popup". All fields are combined with a logical 'AND'. */
export type RulePopupBoolExp = {
  _and?: InputMaybe<Array<RulePopupBoolExp>>;
  _not?: InputMaybe<RulePopupBoolExp>;
  _or?: InputMaybe<Array<RulePopupBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  text?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rule_popup" */
export enum RulePopupConstraint {
  /** unique or primary key constraint on columns "id" */
  RulePopupPkey = 'rule_popup_pkey'
}

/** input type for inserting data into table "rule_popup" */
export type RulePopupInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RulePopupMaxFields = {
  __typename?: 'RulePopupMaxFields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RulePopupMinFields = {
  __typename?: 'RulePopupMinFields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rule_popup" */
export type RulePopupMutationResponse = {
  __typename?: 'RulePopupMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RulePopup>;
};

/** input type for inserting object relation for remote table "rule_popup" */
export type RulePopupObjRelInsertInput = {
  data: RulePopupInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RulePopupOnConflict>;
};

/** on_conflict condition type for table "rule_popup" */
export type RulePopupOnConflict = {
  constraint: RulePopupConstraint;
  update_columns?: Array<RulePopupUpdateColumn>;
  where?: InputMaybe<RulePopupBoolExp>;
};

/** Ordering options when selecting data from "rule_popup". */
export type RulePopupOrderBy = {
  id?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  text?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_popup */
export type RulePopupPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_popup" */
export enum RulePopupSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "rule_popup" */
export type RulePopupSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rule_popup" */
export enum RulePopupUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Text = 'text'
}

export type RulePopupUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RulePopupSetInput>;
  where: RulePopupBoolExp;
};

/** columns and relationships of "rule_screenshot" */
export type RuleScreenshot = {
  __typename?: 'RuleScreenshot';
  id: Scalars['uuid'];
  interval?: Maybe<Scalars['Int']>;
  isMultiple?: Maybe<Scalars['Boolean']>;
  isSealed: Scalars['Boolean'];
  /** An object relationship */
  rule: Rules;
};

/** aggregated selection of "rule_screenshot" */
export type RuleScreenshotAggregate = {
  __typename?: 'RuleScreenshotAggregate';
  aggregate?: Maybe<RuleScreenshotAggregateFields>;
  nodes: Array<RuleScreenshot>;
};

/** aggregate fields of "rule_screenshot" */
export type RuleScreenshotAggregateFields = {
  __typename?: 'RuleScreenshotAggregateFields';
  avg?: Maybe<RuleScreenshotAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<RuleScreenshotMaxFields>;
  min?: Maybe<RuleScreenshotMinFields>;
  stddev?: Maybe<RuleScreenshotStddevFields>;
  stddevPop?: Maybe<RuleScreenshotStddev_PopFields>;
  stddevSamp?: Maybe<RuleScreenshotStddev_SampFields>;
  sum?: Maybe<RuleScreenshotSumFields>;
  varPop?: Maybe<RuleScreenshotVar_PopFields>;
  varSamp?: Maybe<RuleScreenshotVar_SampFields>;
  variance?: Maybe<RuleScreenshotVarianceFields>;
};


/** aggregate fields of "rule_screenshot" */
export type RuleScreenshotAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleScreenshotSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type RuleScreenshotAvgFields = {
  __typename?: 'RuleScreenshotAvgFields';
  interval?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rule_screenshot". All fields are combined with a logical 'AND'. */
export type RuleScreenshotBoolExp = {
  _and?: InputMaybe<Array<RuleScreenshotBoolExp>>;
  _not?: InputMaybe<RuleScreenshotBoolExp>;
  _or?: InputMaybe<Array<RuleScreenshotBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  interval?: InputMaybe<IntComparisonExp>;
  isMultiple?: InputMaybe<BooleanComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
};

/** unique or primary key constraints on table "rule_screenshot" */
export enum RuleScreenshotConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleScreenshotPkey = 'rule_screenshot_pkey'
}

/** input type for incrementing numeric columns in table "rule_screenshot" */
export type RuleScreenshotIncInput = {
  interval?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rule_screenshot" */
export type RuleScreenshotInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  interval?: InputMaybe<Scalars['Int']>;
  isMultiple?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
};

/** aggregate max on columns */
export type RuleScreenshotMaxFields = {
  __typename?: 'RuleScreenshotMaxFields';
  id?: Maybe<Scalars['uuid']>;
  interval?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type RuleScreenshotMinFields = {
  __typename?: 'RuleScreenshotMinFields';
  id?: Maybe<Scalars['uuid']>;
  interval?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "rule_screenshot" */
export type RuleScreenshotMutationResponse = {
  __typename?: 'RuleScreenshotMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleScreenshot>;
};

/** input type for inserting object relation for remote table "rule_screenshot" */
export type RuleScreenshotObjRelInsertInput = {
  data: RuleScreenshotInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RuleScreenshotOnConflict>;
};

/** on_conflict condition type for table "rule_screenshot" */
export type RuleScreenshotOnConflict = {
  constraint: RuleScreenshotConstraint;
  update_columns?: Array<RuleScreenshotUpdateColumn>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};

/** Ordering options when selecting data from "rule_screenshot". */
export type RuleScreenshotOrderBy = {
  id?: InputMaybe<OrderBy>;
  interval?: InputMaybe<OrderBy>;
  isMultiple?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
};

/** primary key columns input for table: rule_screenshot */
export type RuleScreenshotPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_screenshot" */
export enum RuleScreenshotSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  IsMultiple = 'isMultiple',
  /** column name */
  IsSealed = 'isSealed'
}

/** input type for updating data in table "rule_screenshot" */
export type RuleScreenshotSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  interval?: InputMaybe<Scalars['Int']>;
  isMultiple?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type RuleScreenshotStddevFields = {
  __typename?: 'RuleScreenshotStddevFields';
  interval?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type RuleScreenshotStddev_PopFields = {
  __typename?: 'RuleScreenshotStddev_popFields';
  interval?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type RuleScreenshotStddev_SampFields = {
  __typename?: 'RuleScreenshotStddev_sampFields';
  interval?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type RuleScreenshotSumFields = {
  __typename?: 'RuleScreenshotSumFields';
  interval?: Maybe<Scalars['Int']>;
};

/** update columns of table "rule_screenshot" */
export enum RuleScreenshotUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Interval = 'interval',
  /** column name */
  IsMultiple = 'isMultiple',
  /** column name */
  IsSealed = 'isSealed'
}

export type RuleScreenshotUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RuleScreenshotIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleScreenshotSetInput>;
  where: RuleScreenshotBoolExp;
};

/** aggregate var_pop on columns */
export type RuleScreenshotVar_PopFields = {
  __typename?: 'RuleScreenshotVar_popFields';
  interval?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type RuleScreenshotVar_SampFields = {
  __typename?: 'RuleScreenshotVar_sampFields';
  interval?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type RuleScreenshotVarianceFields = {
  __typename?: 'RuleScreenshotVarianceFields';
  interval?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rule_team" */
export type RuleTeam = {
  __typename?: 'RuleTeam';
  id: Scalars['uuid'];
  /** An object relationship */
  rule: Rules;
  ruleId: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['uuid'];
};

/** aggregated selection of "rule_team" */
export type RuleTeamAggregate = {
  __typename?: 'RuleTeamAggregate';
  aggregate?: Maybe<RuleTeamAggregateFields>;
  nodes: Array<RuleTeam>;
};

/** aggregate fields of "rule_team" */
export type RuleTeamAggregateFields = {
  __typename?: 'RuleTeamAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RuleTeamMaxFields>;
  min?: Maybe<RuleTeamMinFields>;
};


/** aggregate fields of "rule_team" */
export type RuleTeamAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleTeamSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rule_team" */
export type RuleTeamAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Rule_Team_Max_Order_By>;
  min?: InputMaybe<Rule_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rule_team" */
export type RuleTeamArrRelInsertInput = {
  data: Array<RuleTeamInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RuleTeamOnConflict>;
};

/** Boolean expression to filter rows from the table "rule_team". All fields are combined with a logical 'AND'. */
export type RuleTeamBoolExp = {
  _and?: InputMaybe<Array<RuleTeamBoolExp>>;
  _not?: InputMaybe<RuleTeamBoolExp>;
  _or?: InputMaybe<Array<RuleTeamBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  ruleId?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "rule_team" */
export enum RuleTeamConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleGroupsPkey = 'rule_groups_pkey',
  /** unique or primary key constraint on columns "rule_id", "team_id" */
  RuleTeamRuleIdTeamIdKey = 'rule_team_rule_id_team_id_key'
}

/** input type for inserting data into table "rule_team" */
export type RuleTeamInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RuleTeamMaxFields = {
  __typename?: 'RuleTeamMaxFields';
  id?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type RuleTeamMinFields = {
  __typename?: 'RuleTeamMinFields';
  id?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "rule_team" */
export type RuleTeamMutationResponse = {
  __typename?: 'RuleTeamMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleTeam>;
};

/** on_conflict condition type for table "rule_team" */
export type RuleTeamOnConflict = {
  constraint: RuleTeamConstraint;
  update_columns?: Array<RuleTeamUpdateColumn>;
  where?: InputMaybe<RuleTeamBoolExp>;
};

/** Ordering options when selecting data from "rule_team". */
export type RuleTeamOrderBy = {
  id?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_team */
export type RuleTeamPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_team" */
export enum RuleTeamSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "rule_team" */
export type RuleTeamSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "rule_team" */
export enum RuleTeamUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  RuleId = 'ruleId',
  /** column name */
  TeamId = 'teamId'
}

export type RuleTeamUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleTeamSetInput>;
  where: RuleTeamBoolExp;
};

/** columns and relationships of "rule_webhook" */
export type RuleWebhook = {
  __typename?: 'RuleWebhook';
  id: Scalars['uuid'];
  isSealed?: Maybe<Scalars['Boolean']>;
  parameters?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  /** An object relationship */
  rule: Rules;
  url?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rule_webhook" */
export type RuleWebhookAggregate = {
  __typename?: 'RuleWebhookAggregate';
  aggregate?: Maybe<RuleWebhookAggregateFields>;
  nodes: Array<RuleWebhook>;
};

/** aggregate fields of "rule_webhook" */
export type RuleWebhookAggregateFields = {
  __typename?: 'RuleWebhookAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RuleWebhookMaxFields>;
  min?: Maybe<RuleWebhookMinFields>;
};


/** aggregate fields of "rule_webhook" */
export type RuleWebhookAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleWebhookSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rule_webhook". All fields are combined with a logical 'AND'. */
export type RuleWebhookBoolExp = {
  _and?: InputMaybe<Array<RuleWebhookBoolExp>>;
  _not?: InputMaybe<RuleWebhookBoolExp>;
  _or?: InputMaybe<Array<RuleWebhookBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  parameters?: InputMaybe<StringComparisonExp>;
  provider?: InputMaybe<StringComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "rule_webhook" */
export enum RuleWebhookConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleWebhookPkey = 'rule_webhook_pkey'
}

/** input type for inserting data into table "rule_webhook" */
export type RuleWebhookInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  parameters?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RuleWebhookMaxFields = {
  __typename?: 'RuleWebhookMaxFields';
  id?: Maybe<Scalars['uuid']>;
  parameters?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RuleWebhookMinFields = {
  __typename?: 'RuleWebhookMinFields';
  id?: Maybe<Scalars['uuid']>;
  parameters?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rule_webhook" */
export type RuleWebhookMutationResponse = {
  __typename?: 'RuleWebhookMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleWebhook>;
};

/** input type for inserting object relation for remote table "rule_webhook" */
export type RuleWebhookObjRelInsertInput = {
  data: RuleWebhookInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RuleWebhookOnConflict>;
};

/** on_conflict condition type for table "rule_webhook" */
export type RuleWebhookOnConflict = {
  constraint: RuleWebhookConstraint;
  update_columns?: Array<RuleWebhookUpdateColumn>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};

/** Ordering options when selecting data from "rule_webhook". */
export type RuleWebhookOrderBy = {
  id?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  parameters?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_webhook */
export type RuleWebhookPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_webhook" */
export enum RuleWebhookSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Parameters = 'parameters',
  /** column name */
  Provider = 'provider',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "rule_webhook" */
export type RuleWebhookSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  parameters?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rule_webhook" */
export enum RuleWebhookUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Parameters = 'parameters',
  /** column name */
  Provider = 'provider',
  /** column name */
  Url = 'url'
}

export type RuleWebhookUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleWebhookSetInput>;
  where: RuleWebhookBoolExp;
};

/** columns and relationships of "rule_weight" */
export type RuleWeight = {
  __typename?: 'RuleWeight';
  id: Scalars['uuid'];
  isSealed?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  rule: Rules;
  value: Scalars['Int'];
};

/** aggregated selection of "rule_weight" */
export type RuleWeightAggregate = {
  __typename?: 'RuleWeightAggregate';
  aggregate?: Maybe<RuleWeightAggregateFields>;
  nodes: Array<RuleWeight>;
};

/** aggregate fields of "rule_weight" */
export type RuleWeightAggregateFields = {
  __typename?: 'RuleWeightAggregateFields';
  avg?: Maybe<RuleWeightAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<RuleWeightMaxFields>;
  min?: Maybe<RuleWeightMinFields>;
  stddev?: Maybe<RuleWeightStddevFields>;
  stddevPop?: Maybe<RuleWeightStddev_PopFields>;
  stddevSamp?: Maybe<RuleWeightStddev_SampFields>;
  sum?: Maybe<RuleWeightSumFields>;
  varPop?: Maybe<RuleWeightVar_PopFields>;
  varSamp?: Maybe<RuleWeightVar_SampFields>;
  variance?: Maybe<RuleWeightVarianceFields>;
};


/** aggregate fields of "rule_weight" */
export type RuleWeightAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RuleWeightSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type RuleWeightAvgFields = {
  __typename?: 'RuleWeightAvgFields';
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rule_weight". All fields are combined with a logical 'AND'. */
export type RuleWeightBoolExp = {
  _and?: InputMaybe<Array<RuleWeightBoolExp>>;
  _not?: InputMaybe<RuleWeightBoolExp>;
  _or?: InputMaybe<Array<RuleWeightBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  value?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "rule_weight" */
export enum RuleWeightConstraint {
  /** unique or primary key constraint on columns "id" */
  RuleWeightPkey = 'rule_weight_pkey'
}

/** input type for incrementing numeric columns in table "rule_weight" */
export type RuleWeightIncInput = {
  value?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rule_weight" */
export type RuleWeightInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type RuleWeightMaxFields = {
  __typename?: 'RuleWeightMaxFields';
  id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type RuleWeightMinFields = {
  __typename?: 'RuleWeightMinFields';
  id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "rule_weight" */
export type RuleWeightMutationResponse = {
  __typename?: 'RuleWeightMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RuleWeight>;
};

/** input type for inserting object relation for remote table "rule_weight" */
export type RuleWeightObjRelInsertInput = {
  data: RuleWeightInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RuleWeightOnConflict>;
};

/** on_conflict condition type for table "rule_weight" */
export type RuleWeightOnConflict = {
  constraint: RuleWeightConstraint;
  update_columns?: Array<RuleWeightUpdateColumn>;
  where?: InputMaybe<RuleWeightBoolExp>;
};

/** Ordering options when selecting data from "rule_weight". */
export type RuleWeightOrderBy = {
  id?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: rule_weight */
export type RuleWeightPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rule_weight" */
export enum RuleWeightSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rule_weight" */
export type RuleWeightSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type RuleWeightStddevFields = {
  __typename?: 'RuleWeightStddevFields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type RuleWeightStddev_PopFields = {
  __typename?: 'RuleWeightStddev_popFields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type RuleWeightStddev_SampFields = {
  __typename?: 'RuleWeightStddev_sampFields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type RuleWeightSumFields = {
  __typename?: 'RuleWeightSumFields';
  value?: Maybe<Scalars['Int']>;
};

/** update columns of table "rule_weight" */
export enum RuleWeightUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Value = 'value'
}

export type RuleWeightUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RuleWeightIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RuleWeightSetInput>;
  where: RuleWeightBoolExp;
};

/** aggregate var_pop on columns */
export type RuleWeightVar_PopFields = {
  __typename?: 'RuleWeightVar_popFields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type RuleWeightVar_SampFields = {
  __typename?: 'RuleWeightVar_sampFields';
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type RuleWeightVarianceFields = {
  __typename?: 'RuleWeightVarianceFields';
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rules" */
export type Rules = {
  __typename?: 'Rules';
  /** An object relationship */
  disposable?: Maybe<RuleDisposable>;
  /** An object relationship */
  email?: Maybe<RuleEmail>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDefault?: Maybe<Scalars['Boolean']>;
  isEnabled: Scalars['Boolean'];
  isOr?: Maybe<Scalars['Boolean']>;
  isSealed: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  popup?: Maybe<RulePopup>;
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  rule?: Maybe<Rules>;
  /** An array relationship */
  ruleConditions: Array<RuleConditions>;
  /** An aggregate relationship */
  ruleConditionsAggregate: RuleConditionsAggregate;
  /** An array relationship */
  ruleEvents: Array<Events>;
  /** An aggregate relationship */
  ruleEventsAggregate: EventsAggregate;
  ruleId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  ruleTeams: Array<RuleTeam>;
  /** An aggregate relationship */
  ruleTeamsAggregate: RuleTeamAggregate;
  /** An array relationship */
  rules: Array<Rules>;
  /** An aggregate relationship */
  rulesAggregate: RulesAggregate;
  /** An object relationship */
  screenshot?: Maybe<RuleScreenshot>;
  /** An object relationship */
  webhook?: Maybe<RuleWebhook>;
  /** An object relationship */
  weight?: Maybe<RuleWeight>;
};


/** columns and relationships of "rules" */
export type RulesRuleConditionsArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRuleConditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRuleEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRuleEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRuleTeamsArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRuleTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRulesArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


/** columns and relationships of "rules" */
export type RulesRulesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};

/** aggregated selection of "rules" */
export type RulesAggregate = {
  __typename?: 'RulesAggregate';
  aggregate?: Maybe<RulesAggregateFields>;
  nodes: Array<Rules>;
};

/** aggregate fields of "rules" */
export type RulesAggregateFields = {
  __typename?: 'RulesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<RulesMaxFields>;
  min?: Maybe<RulesMinFields>;
};


/** aggregate fields of "rules" */
export type RulesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RulesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rules" */
export type RulesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Rules_Max_Order_By>;
  min?: InputMaybe<Rules_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rules" */
export type RulesArrRelInsertInput = {
  data: Array<RulesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RulesOnConflict>;
};

/** Boolean expression to filter rows from the table "rules". All fields are combined with a logical 'AND'. */
export type RulesBoolExp = {
  _and?: InputMaybe<Array<RulesBoolExp>>;
  _not?: InputMaybe<RulesBoolExp>;
  _or?: InputMaybe<Array<RulesBoolExp>>;
  disposable?: InputMaybe<RuleDisposableBoolExp>;
  email?: InputMaybe<RuleEmailBoolExp>;
  externalId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isDefault?: InputMaybe<BooleanComparisonExp>;
  isEnabled?: InputMaybe<BooleanComparisonExp>;
  isOr?: InputMaybe<BooleanComparisonExp>;
  isSealed?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  popup?: InputMaybe<RulePopupBoolExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  rule?: InputMaybe<RulesBoolExp>;
  ruleConditions?: InputMaybe<RuleConditionsBoolExp>;
  ruleEvents?: InputMaybe<EventsBoolExp>;
  ruleId?: InputMaybe<UuidComparisonExp>;
  ruleTeams?: InputMaybe<RuleTeamBoolExp>;
  rules?: InputMaybe<RulesBoolExp>;
  screenshot?: InputMaybe<RuleScreenshotBoolExp>;
  webhook?: InputMaybe<RuleWebhookBoolExp>;
  weight?: InputMaybe<RuleWeightBoolExp>;
};

/** unique or primary key constraints on table "rules" */
export enum RulesConstraint {
  /** unique or primary key constraint on columns "id" */
  RulesPkey = 'rules_pkey'
}

/** input type for inserting data into table "rules" */
export type RulesInsertInput = {
  disposable?: InputMaybe<RuleDisposableObjRelInsertInput>;
  email?: InputMaybe<RuleEmailObjRelInsertInput>;
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isOr?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  popup?: InputMaybe<RulePopupObjRelInsertInput>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']>;
  rule?: InputMaybe<RulesObjRelInsertInput>;
  ruleConditions?: InputMaybe<RuleConditionsArrRelInsertInput>;
  ruleEvents?: InputMaybe<EventsArrRelInsertInput>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  ruleTeams?: InputMaybe<RuleTeamArrRelInsertInput>;
  rules?: InputMaybe<RulesArrRelInsertInput>;
  screenshot?: InputMaybe<RuleScreenshotObjRelInsertInput>;
  webhook?: InputMaybe<RuleWebhookObjRelInsertInput>;
  weight?: InputMaybe<RuleWeightObjRelInsertInput>;
};

/** aggregate max on columns */
export type RulesMaxFields = {
  __typename?: 'RulesMaxFields';
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type RulesMinFields = {
  __typename?: 'RulesMinFields';
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['uuid']>;
  ruleId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "rules" */
export type RulesMutationResponse = {
  __typename?: 'RulesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rules>;
};

/** input type for inserting object relation for remote table "rules" */
export type RulesObjRelInsertInput = {
  data: RulesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RulesOnConflict>;
};

/** on_conflict condition type for table "rules" */
export type RulesOnConflict = {
  constraint: RulesConstraint;
  update_columns?: Array<RulesUpdateColumn>;
  where?: InputMaybe<RulesBoolExp>;
};

/** Ordering options when selecting data from "rules". */
export type RulesOrderBy = {
  disposable?: InputMaybe<RuleDisposableOrderBy>;
  email?: InputMaybe<RuleEmailOrderBy>;
  externalId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isDefault?: InputMaybe<OrderBy>;
  isEnabled?: InputMaybe<OrderBy>;
  isOr?: InputMaybe<OrderBy>;
  isSealed?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  popup?: InputMaybe<RulePopupOrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  rule?: InputMaybe<RulesOrderBy>;
  ruleConditionsAggregate?: InputMaybe<RuleConditionsAggregateOrderBy>;
  ruleEventsAggregate?: InputMaybe<EventsAggregateOrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  ruleTeamsAggregate?: InputMaybe<RuleTeamAggregateOrderBy>;
  rulesAggregate?: InputMaybe<RulesAggregateOrderBy>;
  screenshot?: InputMaybe<RuleScreenshotOrderBy>;
  webhook?: InputMaybe<RuleWebhookOrderBy>;
  weight?: InputMaybe<RuleWeightOrderBy>;
};

/** primary key columns input for table: rules */
export type RulesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "rules" */
export enum RulesSelectColumn {
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsEnabled = 'isEnabled',
  /** column name */
  IsOr = 'isOr',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RuleId = 'ruleId'
}

/** input type for updating data in table "rules" */
export type RulesSetInput = {
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isOr?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "rules" */
export enum RulesUpdateColumn {
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsEnabled = 'isEnabled',
  /** column name */
  IsOr = 'isOr',
  /** column name */
  IsSealed = 'isSealed',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RuleId = 'ruleId'
}

export type RulesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RulesSetInput>;
  where: RulesBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** A triple tag or machine tag uses a special syntax to define extra semantic information about the tag, making it easier or more meaningful for interpretation by a computer program.[37] Triple tags comprise three parts: a namespace, a predicate, and a value. For example, geo:long=50.123456 is a tag for the geographical longitude coordinate whose value is 50.123456. This triple structure is similar to the Resource Description Framework model for information. */
export type Tags = {
  __typename?: 'Tags';
  defaultValue: Scalars['String'];
  id: Scalars['uuid'];
  isValueRequired: Scalars['Boolean'];
  namespace: Scalars['String'];
  predicate: Scalars['String'];
};

/** aggregated selection of "tags" */
export type TagsAggregate = {
  __typename?: 'TagsAggregate';
  aggregate?: Maybe<TagsAggregateFields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type TagsAggregateFields = {
  __typename?: 'TagsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TagsMaxFields>;
  min?: Maybe<TagsMinFields>;
};


/** aggregate fields of "tags" */
export type TagsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type TagsBoolExp = {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  defaultValue?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isValueRequired?: InputMaybe<BooleanComparisonExp>;
  namespace?: InputMaybe<StringComparisonExp>;
  predicate?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "tags" */
export enum TagsConstraint {
  /** unique or primary key constraint on columns "id" */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type TagsInsertInput = {
  defaultValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValueRequired?: InputMaybe<Scalars['Boolean']>;
  namespace?: InputMaybe<Scalars['String']>;
  predicate?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TagsMaxFields = {
  __typename?: 'TagsMaxFields';
  defaultValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  namespace?: Maybe<Scalars['String']>;
  predicate?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TagsMinFields = {
  __typename?: 'TagsMinFields';
  defaultValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  namespace?: Maybe<Scalars['String']>;
  predicate?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type TagsMutationResponse = {
  __typename?: 'TagsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** on_conflict condition type for table "tags" */
export type TagsOnConflict = {
  constraint: TagsConstraint;
  update_columns?: Array<TagsUpdateColumn>;
  where?: InputMaybe<TagsBoolExp>;
};

/** Ordering options when selecting data from "tags". */
export type TagsOrderBy = {
  defaultValue?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isValueRequired?: InputMaybe<OrderBy>;
  namespace?: InputMaybe<OrderBy>;
  predicate?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: tags */
export type TagsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "tags" */
export enum TagsSelectColumn {
  /** column name */
  DefaultValue = 'defaultValue',
  /** column name */
  Id = 'id',
  /** column name */
  IsValueRequired = 'isValueRequired',
  /** column name */
  Namespace = 'namespace',
  /** column name */
  Predicate = 'predicate'
}

/** input type for updating data in table "tags" */
export type TagsSetInput = {
  defaultValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValueRequired?: InputMaybe<Scalars['Boolean']>;
  namespace?: InputMaybe<Scalars['String']>;
  predicate?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tags" */
export enum TagsUpdateColumn {
  /** column name */
  DefaultValue = 'defaultValue',
  /** column name */
  Id = 'id',
  /** column name */
  IsValueRequired = 'isValueRequired',
  /** column name */
  Namespace = 'namespace',
  /** column name */
  Predicate = 'predicate'
}

export type TagsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TagsSetInput>;
  where: TagsBoolExp;
};

/** columns and relationships of "team_team" */
export type TeamTeam = {
  __typename?: 'TeamTeam';
  id: Scalars['uuid'];
  /** An object relationship */
  parentTeam: Teams;
  parentTeamId: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['uuid'];
};

/** aggregated selection of "team_team" */
export type TeamTeamAggregate = {
  __typename?: 'TeamTeamAggregate';
  aggregate?: Maybe<TeamTeamAggregateFields>;
  nodes: Array<TeamTeam>;
};

/** aggregate fields of "team_team" */
export type TeamTeamAggregateFields = {
  __typename?: 'TeamTeamAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TeamTeamMaxFields>;
  min?: Maybe<TeamTeamMinFields>;
};


/** aggregate fields of "team_team" */
export type TeamTeamAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeamTeamSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_team" */
export type TeamTeamAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Team_Team_Max_Order_By>;
  min?: InputMaybe<Team_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "team_team" */
export type TeamTeamArrRelInsertInput = {
  data: Array<TeamTeamInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TeamTeamOnConflict>;
};

/** Boolean expression to filter rows from the table "team_team". All fields are combined with a logical 'AND'. */
export type TeamTeamBoolExp = {
  _and?: InputMaybe<Array<TeamTeamBoolExp>>;
  _not?: InputMaybe<TeamTeamBoolExp>;
  _or?: InputMaybe<Array<TeamTeamBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  parentTeam?: InputMaybe<TeamsBoolExp>;
  parentTeamId?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "team_team" */
export enum TeamTeamConstraint {
  /** unique or primary key constraint on columns "id" */
  GroupGroupPkey = 'group_group_pkey'
}

/** input type for inserting data into table "team_team" */
export type TeamTeamInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  parentTeam?: InputMaybe<TeamsObjRelInsertInput>;
  parentTeamId?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TeamTeamMaxFields = {
  __typename?: 'TeamTeamMaxFields';
  id?: Maybe<Scalars['uuid']>;
  parentTeamId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TeamTeamMinFields = {
  __typename?: 'TeamTeamMinFields';
  id?: Maybe<Scalars['uuid']>;
  parentTeamId?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "team_team" */
export type TeamTeamMutationResponse = {
  __typename?: 'TeamTeamMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TeamTeam>;
};

/** on_conflict condition type for table "team_team" */
export type TeamTeamOnConflict = {
  constraint: TeamTeamConstraint;
  update_columns?: Array<TeamTeamUpdateColumn>;
  where?: InputMaybe<TeamTeamBoolExp>;
};

/** Ordering options when selecting data from "team_team". */
export type TeamTeamOrderBy = {
  id?: InputMaybe<OrderBy>;
  parentTeam?: InputMaybe<TeamsOrderBy>;
  parentTeamId?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: team_team */
export type TeamTeamPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "team_team" */
export enum TeamTeamSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ParentTeamId = 'parentTeamId',
  /** column name */
  TeamId = 'teamId'
}

/** input type for updating data in table "team_team" */
export type TeamTeamSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  parentTeamId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "team_team" */
export enum TeamTeamUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ParentTeamId = 'parentTeamId',
  /** column name */
  TeamId = 'teamId'
}

export type TeamTeamUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeamTeamSetInput>;
  where: TeamTeamBoolExp;
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'Teams';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  employeeTeams: Array<UserTeam>;
  /** An aggregate relationship */
  employeeTeamsAggregate: UserTeamAggregate;
  iconData: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  organizationsTeams: Array<OrganizationsTeam>;
  /** An aggregate relationship */
  organizationsTeamsAggregate: OrganizationsTeamAggregate;
  /** An array relationship */
  projectTeams: Array<ProjectTeam>;
  /** An aggregate relationship */
  projectTeamsAggregate: ProjectTeamAggregate;
  /** An array relationship */
  ruleTeams: Array<RuleTeam>;
  /** An aggregate relationship */
  ruleTeamsAggregate: RuleTeamAggregate;
  /** An array relationship */
  teamTeams: Array<TeamTeam>;
  /** An aggregate relationship */
  teamTeamsAggregate: TeamTeamAggregate;
  /** An array relationship */
  teamTeamsByParentTeamId: Array<TeamTeam>;
  /** An aggregate relationship */
  teamTeamsByParentTeamIdAggregate: TeamTeamAggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "teams" */
export type TeamsEmployeeTeamsArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsEmployeeTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsOrganizationsTeamsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsOrganizationsTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsProjectTeamsArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsProjectTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsRuleTeamsArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsRuleTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsTeamTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsTeamTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsTeamTeamsByParentTeamIdArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


/** columns and relationships of "teams" */
export type TeamsTeamTeamsByParentTeamIdAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};

/** aggregated selection of "teams" */
export type TeamsAggregate = {
  __typename?: 'TeamsAggregate';
  aggregate?: Maybe<TeamsAggregateFields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type TeamsAggregateFields = {
  __typename?: 'TeamsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<TeamsMaxFields>;
  min?: Maybe<TeamsMinFields>;
};


/** aggregate fields of "teams" */
export type TeamsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeamsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type TeamsBoolExp = {
  _and?: InputMaybe<Array<TeamsBoolExp>>;
  _not?: InputMaybe<TeamsBoolExp>;
  _or?: InputMaybe<Array<TeamsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  employeeTeams?: InputMaybe<UserTeamBoolExp>;
  iconData?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  organizationsTeams?: InputMaybe<OrganizationsTeamBoolExp>;
  projectTeams?: InputMaybe<ProjectTeamBoolExp>;
  ruleTeams?: InputMaybe<RuleTeamBoolExp>;
  teamTeams?: InputMaybe<TeamTeamBoolExp>;
  teamTeamsByParentTeamId?: InputMaybe<TeamTeamBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "teams" */
export enum TeamsConstraint {
  /** unique or primary key constraint on columns "id" */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type TeamsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  employeeTeams?: InputMaybe<UserTeamArrRelInsertInput>;
  iconData?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organizationsTeams?: InputMaybe<OrganizationsTeamArrRelInsertInput>;
  projectTeams?: InputMaybe<ProjectTeamArrRelInsertInput>;
  ruleTeams?: InputMaybe<RuleTeamArrRelInsertInput>;
  teamTeams?: InputMaybe<TeamTeamArrRelInsertInput>;
  teamTeamsByParentTeamId?: InputMaybe<TeamTeamArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TeamsMaxFields = {
  __typename?: 'TeamsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  iconData?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TeamsMinFields = {
  __typename?: 'TeamsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  iconData?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "teams" */
export type TeamsMutationResponse = {
  __typename?: 'TeamsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type TeamsObjRelInsertInput = {
  data: TeamsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<TeamsOnConflict>;
};

/** on_conflict condition type for table "teams" */
export type TeamsOnConflict = {
  constraint: TeamsConstraint;
  update_columns?: Array<TeamsUpdateColumn>;
  where?: InputMaybe<TeamsBoolExp>;
};

/** Ordering options when selecting data from "teams". */
export type TeamsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  employeeTeamsAggregate?: InputMaybe<UserTeamAggregateOrderBy>;
  iconData?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organizationsTeamsAggregate?: InputMaybe<OrganizationsTeamAggregateOrderBy>;
  projectTeamsAggregate?: InputMaybe<ProjectTeamAggregateOrderBy>;
  ruleTeamsAggregate?: InputMaybe<RuleTeamAggregateOrderBy>;
  teamTeamsAggregate?: InputMaybe<TeamTeamAggregateOrderBy>;
  teamTeamsByParentTeamIdAggregate?: InputMaybe<TeamTeamAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: teams */
export type TeamsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "teams" */
export enum TeamsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  IconData = 'iconData',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "teams" */
export type TeamsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  iconData?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "teams" */
export enum TeamsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  IconData = 'iconData',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type TeamsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeamsSetInput>;
  where: TeamsBoolExp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_networks" */
export type UserNetworks = {
  __typename?: 'UserNetworks';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  network: Networks;
  networkId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_networks" */
export type UserNetworksAggregate = {
  __typename?: 'UserNetworksAggregate';
  aggregate?: Maybe<UserNetworksAggregateFields>;
  nodes: Array<UserNetworks>;
};

/** aggregate fields of "user_networks" */
export type UserNetworksAggregateFields = {
  __typename?: 'UserNetworksAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserNetworksMaxFields>;
  min?: Maybe<UserNetworksMinFields>;
};


/** aggregate fields of "user_networks" */
export type UserNetworksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserNetworksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_networks" */
export type UserNetworksAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<User_Networks_Max_Order_By>;
  min?: InputMaybe<User_Networks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_networks" */
export type UserNetworksArrRelInsertInput = {
  data: Array<UserNetworksInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserNetworksOnConflict>;
};

/** Boolean expression to filter rows from the table "user_networks". All fields are combined with a logical 'AND'. */
export type UserNetworksBoolExp = {
  _and?: InputMaybe<Array<UserNetworksBoolExp>>;
  _not?: InputMaybe<UserNetworksBoolExp>;
  _or?: InputMaybe<Array<UserNetworksBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  network?: InputMaybe<NetworksBoolExp>;
  networkId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_networks" */
export enum UserNetworksConstraint {
  /** unique or primary key constraint on columns "id" */
  EmployeeNetworksPkey = 'employee_networks_pkey'
}

/** input type for inserting data into table "user_networks" */
export type UserNetworksInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  network?: InputMaybe<NetworksObjRelInsertInput>;
  networkId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserNetworksMaxFields = {
  __typename?: 'UserNetworksMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  networkId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserNetworksMinFields = {
  __typename?: 'UserNetworksMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  networkId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_networks" */
export type UserNetworksMutationResponse = {
  __typename?: 'UserNetworksMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserNetworks>;
};

/** on_conflict condition type for table "user_networks" */
export type UserNetworksOnConflict = {
  constraint: UserNetworksConstraint;
  update_columns?: Array<UserNetworksUpdateColumn>;
  where?: InputMaybe<UserNetworksBoolExp>;
};

/** Ordering options when selecting data from "user_networks". */
export type UserNetworksOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  network?: InputMaybe<NetworksOrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_networks */
export type UserNetworksPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user_networks" */
export enum UserNetworksSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NetworkId = 'networkId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_networks" */
export type UserNetworksSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  networkId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_networks" */
export enum UserNetworksUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  NetworkId = 'networkId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type UserNetworksUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserNetworksSetInput>;
  where: UserNetworksBoolExp;
};

/** columns and relationships of "user_organization" */
export type UserOrganization = {
  __typename?: 'UserOrganization';
  id: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "user_organization" */
export type UserOrganizationAggregate = {
  __typename?: 'UserOrganizationAggregate';
  aggregate?: Maybe<UserOrganizationAggregateFields>;
  nodes: Array<UserOrganization>;
};

/** aggregate fields of "user_organization" */
export type UserOrganizationAggregateFields = {
  __typename?: 'UserOrganizationAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserOrganizationMaxFields>;
  min?: Maybe<UserOrganizationMinFields>;
};


/** aggregate fields of "user_organization" */
export type UserOrganizationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_organization" */
export type UserOrganizationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<User_Organization_Max_Order_By>;
  min?: InputMaybe<User_Organization_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_organization" */
export type UserOrganizationArrRelInsertInput = {
  data: Array<UserOrganizationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserOrganizationOnConflict>;
};

/** Boolean expression to filter rows from the table "user_organization". All fields are combined with a logical 'AND'. */
export type UserOrganizationBoolExp = {
  _and?: InputMaybe<Array<UserOrganizationBoolExp>>;
  _not?: InputMaybe<UserOrganizationBoolExp>;
  _or?: InputMaybe<Array<UserOrganizationBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  organization?: InputMaybe<OrganizationsBoolExp>;
  organizationId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "user_organization" */
export enum UserOrganizationConstraint {
  /** unique or primary key constraint on columns "id" */
  UserOrganizationPkey = 'user_organization_pkey'
}

/** input type for inserting data into table "user_organization" */
export type UserOrganizationInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<OrganizationsObjRelInsertInput>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type UserOrganizationMaxFields = {
  __typename?: 'UserOrganizationMaxFields';
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserOrganizationMinFields = {
  __typename?: 'UserOrganizationMinFields';
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_organization" */
export type UserOrganizationMutationResponse = {
  __typename?: 'UserOrganizationMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserOrganization>;
};

/** input type for inserting object relation for remote table "user_organization" */
export type UserOrganizationObjRelInsertInput = {
  data: UserOrganizationInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOrganizationOnConflict>;
};

/** on_conflict condition type for table "user_organization" */
export type UserOrganizationOnConflict = {
  constraint: UserOrganizationConstraint;
  update_columns?: Array<UserOrganizationUpdateColumn>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};

/** Ordering options when selecting data from "user_organization". */
export type UserOrganizationOrderBy = {
  id?: InputMaybe<OrderBy>;
  organization?: InputMaybe<OrganizationsOrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
};

/** primary key columns input for table: user_organization */
export type UserOrganizationPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user_organization" */
export enum UserOrganizationSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId'
}

/** input type for updating data in table "user_organization" */
export type UserOrganizationSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_organization" */
export enum UserOrganizationUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId'
}

export type UserOrganizationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserOrganizationSetInput>;
  where: UserOrganizationBoolExp;
};

/** columns and relationships of "user_team" */
export type UserTeam = {
  __typename?: 'UserTeam';
  id: Scalars['uuid'];
  /** An object relationship */
  team: Teams;
  teamId: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user_team" */
export type UserTeamAggregate = {
  __typename?: 'UserTeamAggregate';
  aggregate?: Maybe<UserTeamAggregateFields>;
  nodes: Array<UserTeam>;
};

/** aggregate fields of "user_team" */
export type UserTeamAggregateFields = {
  __typename?: 'UserTeamAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UserTeamMaxFields>;
  min?: Maybe<UserTeamMinFields>;
};


/** aggregate fields of "user_team" */
export type UserTeamAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserTeamSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_team" */
export type UserTeamAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<User_Team_Max_Order_By>;
  min?: InputMaybe<User_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_team" */
export type UserTeamArrRelInsertInput = {
  data: Array<UserTeamInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserTeamOnConflict>;
};

/** Boolean expression to filter rows from the table "user_team". All fields are combined with a logical 'AND'. */
export type UserTeamBoolExp = {
  _and?: InputMaybe<Array<UserTeamBoolExp>>;
  _not?: InputMaybe<UserTeamBoolExp>;
  _or?: InputMaybe<Array<UserTeamBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<TeamsBoolExp>;
  teamId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_team" */
export enum UserTeamConstraint {
  /** unique or primary key constraint on columns "id" */
  EmployeeTeamPkey = 'employee_team_pkey'
}

/** input type for inserting data into table "user_team" */
export type UserTeamInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<TeamsObjRelInsertInput>;
  teamId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserTeamMaxFields = {
  __typename?: 'UserTeamMaxFields';
  id?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UserTeamMinFields = {
  __typename?: 'UserTeamMinFields';
  id?: Maybe<Scalars['uuid']>;
  teamId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_team" */
export type UserTeamMutationResponse = {
  __typename?: 'UserTeamMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserTeam>;
};

/** on_conflict condition type for table "user_team" */
export type UserTeamOnConflict = {
  constraint: UserTeamConstraint;
  update_columns?: Array<UserTeamUpdateColumn>;
  where?: InputMaybe<UserTeamBoolExp>;
};

/** Ordering options when selecting data from "user_team". */
export type UserTeamOrderBy = {
  id?: InputMaybe<OrderBy>;
  team?: InputMaybe<TeamsOrderBy>;
  teamId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_team */
export type UserTeamPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user_team" */
export enum UserTeamSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_team" */
export type UserTeamSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_team" */
export enum UserTeamUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  TeamId = 'teamId',
  /** column name */
  UserId = 'userId'
}

export type UserTeamUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserTeamSetInput>;
  where: UserTeamBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  __typename?: 'authProviderRequestsAggregate';
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  __typename?: 'authProviderRequestsAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsAppendInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: InputMaybe<AuthProviderRequestsBoolExp>;
  _or?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  options?: InputMaybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequestsDeleteAtPathInput = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequestsDeleteElemInput = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequestsDeleteKeyInput = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  __typename?: 'authProviderRequestsMaxFields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  __typename?: 'authProviderRequestsMinFields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  __typename?: 'authProviderRequestsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsPrependInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequestsUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthProviderRequests_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProvidersAggregate: AuthUserProvidersAggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'authProvidersAggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'authProvidersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthProvidersBoolExp>>;
  _not?: InputMaybe<AuthProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthProvidersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'authProvidersMaxFields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'authProvidersMinFields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'authProvidersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: InputMaybe<OrderBy>;
  userProvidersAggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: auth.providers */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Id = 'id'
}

export type AuthProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthProviders_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  __typename?: 'authRefreshTokensAggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'authRefreshTokensAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: InputMaybe<AuthRefreshTokensBoolExp>;
  _or?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  refreshToken?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'authRefreshTokensMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'authRefreshTokensMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'authRefreshTokensMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokensPkColumnsInput = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokensUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthRefreshTokens_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRolesAggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRoleAggregate: UsersAggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'authRolesAggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'authRolesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: InputMaybe<Array<AuthRolesBoolExp>>;
  _not?: InputMaybe<AuthRolesBoolExp>;
  _or?: InputMaybe<Array<AuthRolesBoolExp>>;
  role?: InputMaybe<StringComparisonExp>;
  userRoles?: InputMaybe<AuthUserRolesBoolExp>;
  usersByDefaultRole?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'authRolesMaxFields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'authRolesMinFields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'authRolesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  userRolesAggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRoleAggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: auth.roles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
  /** column name */
  Role = 'role'
}

export type AuthRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthRoles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_StreamCursorValueInput = {
  role?: InputMaybe<Scalars['String']>;
};

/** User webauthn authenticators. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserAuthenticators = {
  __typename?: 'authUserAuthenticators';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregate = {
  __typename?: 'authUserAuthenticatorsAggregate';
  aggregate?: Maybe<AuthUserAuthenticatorsAggregateFields>;
  nodes: Array<AuthUserAuthenticators>;
};

/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFields = {
  __typename?: 'authUserAuthenticatorsAggregateFields';
  avg?: Maybe<AuthUserAuthenticatorsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserAuthenticatorsMaxFields>;
  min?: Maybe<AuthUserAuthenticatorsMinFields>;
  stddev?: Maybe<AuthUserAuthenticatorsStddevFields>;
  stddevPop?: Maybe<AuthUserAuthenticatorsStddev_PopFields>;
  stddevSamp?: Maybe<AuthUserAuthenticatorsStddev_SampFields>;
  sum?: Maybe<AuthUserAuthenticatorsSumFields>;
  varPop?: Maybe<AuthUserAuthenticatorsVar_PopFields>;
  varSamp?: Maybe<AuthUserAuthenticatorsVar_SampFields>;
  variance?: Maybe<AuthUserAuthenticatorsVarianceFields>;
};


/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateOrderBy = {
  avg?: InputMaybe<AuthUserAuthenticators_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserAuthenticators_Max_Order_By>;
  min?: InputMaybe<AuthUserAuthenticators_Min_Order_By>;
  stddev?: InputMaybe<AuthUserAuthenticators_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserAuthenticators_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserAuthenticators_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserAuthenticators_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserAuthenticators_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserAuthenticators_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserAuthenticators_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_authenticators" */
export type AuthUserAuthenticatorsArrRelInsertInput = {
  data: Array<AuthUserAuthenticatorsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};

/** aggregate avg on columns */
export type AuthUserAuthenticatorsAvgFields = {
  __typename?: 'authUserAuthenticatorsAvgFields';
  counter?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.user_authenticators". All fields are combined with a logical 'AND'. */
export type AuthUserAuthenticatorsBoolExp = {
  _and?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  _not?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  _or?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  counter?: InputMaybe<BigintComparisonExp>;
  credentialId?: InputMaybe<StringComparisonExp>;
  credentialPublicKey?: InputMaybe<ByteaComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  transports?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsConstraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserAuthenticatorsCredentialIdKey = 'user_authenticators_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserAuthenticatorsPkey = 'user_authenticators_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsIncInput = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_authenticators" */
export type AuthUserAuthenticatorsInsertInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserAuthenticatorsMaxFields = {
  __typename?: 'authUserAuthenticatorsMaxFields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthUserAuthenticatorsMinFields = {
  __typename?: 'authUserAuthenticatorsMinFields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMutationResponse = {
  __typename?: 'authUserAuthenticatorsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserAuthenticators>;
};

/** on_conflict condition type for table "auth.user_authenticators" */
export type AuthUserAuthenticatorsOnConflict = {
  constraint: AuthUserAuthenticatorsConstraint;
  update_columns?: Array<AuthUserAuthenticatorsUpdateColumn>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};

/** Ordering options when selecting data from "auth.user_authenticators". */
export type AuthUserAuthenticatorsOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  credentialPublicKey?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_authenticators */
export type AuthUserAuthenticatorsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsSelectColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsSetInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserAuthenticatorsStddevFields = {
  __typename?: 'authUserAuthenticatorsStddevFields';
  counter?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AuthUserAuthenticatorsStddev_PopFields = {
  __typename?: 'authUserAuthenticatorsStddev_popFields';
  counter?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AuthUserAuthenticatorsStddev_SampFields = {
  __typename?: 'authUserAuthenticatorsStddev_sampFields';
  counter?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type AuthUserAuthenticatorsSumFields = {
  __typename?: 'authUserAuthenticatorsSumFields';
  counter?: Maybe<Scalars['bigint']>;
};

/** update columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsUpdateColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserAuthenticatorsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  where: AuthUserAuthenticatorsBoolExp;
};

/** aggregate var_pop on columns */
export type AuthUserAuthenticatorsVar_PopFields = {
  __typename?: 'authUserAuthenticatorsVar_popFields';
  counter?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AuthUserAuthenticatorsVar_SampFields = {
  __typename?: 'authUserAuthenticatorsVar_sampFields';
  counter?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AuthUserAuthenticatorsVarianceFields = {
  __typename?: 'authUserAuthenticatorsVarianceFields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Avg_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Max_Order_By = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Min_Order_By = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Pop_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Stddev_Samp_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserAuthenticators" */
export type AuthUserAuthenticators_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserAuthenticators_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserAuthenticators_StreamCursorValueInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** order by sum() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Sum_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Pop_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Var_Samp_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticators_Variance_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProvidersAggregate = {
  __typename?: 'authUserProvidersAggregate';
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  __typename?: 'authUserProvidersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  _not?: InputMaybe<AuthUserProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  provider?: InputMaybe<AuthProvidersBoolExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProvidersObjRelInsertInput>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
  __typename?: 'authUserProvidersMaxFields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
  __typename?: 'authUserProvidersMinFields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  __typename?: 'authUserProvidersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  provider?: InputMaybe<AuthProvidersOrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProvidersSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserProviders_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_StreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRolesAggregate = {
  __typename?: 'authUserRolesAggregate';
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  __typename?: 'authUserRolesAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  _not?: InputMaybe<AuthUserRolesBoolExp>;
  _or?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  roleByRole?: InputMaybe<AuthRolesBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  __typename?: 'authUserRolesMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  __typename?: 'authUserRolesMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  __typename?: 'authUserRolesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<AuthRolesOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRolesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserRoles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  filesAggregate: FilesAggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

/** aggregated selection of "storage.buckets" */
export type BucketsAggregate = {
  __typename?: 'bucketsAggregate';
  aggregate?: Maybe<BucketsAggregateFields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFields = {
  __typename?: 'bucketsAggregateFields';
  avg?: Maybe<BucketsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BucketsMaxFields>;
  min?: Maybe<BucketsMinFields>;
  stddev?: Maybe<BucketsStddevFields>;
  stddevPop?: Maybe<BucketsStddev_PopFields>;
  stddevSamp?: Maybe<BucketsStddev_SampFields>;
  sum?: Maybe<BucketsSumFields>;
  varPop?: Maybe<BucketsVar_PopFields>;
  varSamp?: Maybe<BucketsVar_SampFields>;
  variance?: Maybe<BucketsVarianceFields>;
};


/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BucketsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BucketsAvgFields = {
  __typename?: 'bucketsAvgFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type BucketsBoolExp = {
  _and?: InputMaybe<Array<BucketsBoolExp>>;
  _not?: InputMaybe<BucketsBoolExp>;
  _or?: InputMaybe<Array<BucketsBoolExp>>;
  cacheControl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  downloadExpiration?: InputMaybe<IntComparisonExp>;
  files?: InputMaybe<FilesBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxUploadFileSize?: InputMaybe<IntComparisonExp>;
  minUploadFileSize?: InputMaybe<IntComparisonExp>;
  presignedUrlsEnabled?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum BucketsConstraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type BucketsIncInput = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type BucketsInsertInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<FilesArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type BucketsMaxFields = {
  __typename?: 'bucketsMaxFields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type BucketsMinFields = {
  __typename?: 'bucketsMinFields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type BucketsMutationResponse = {
  __typename?: 'bucketsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type BucketsObjRelInsertInput = {
  data: BucketsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<BucketsOnConflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type BucketsOnConflict = {
  constraint: BucketsConstraint;
  update_columns?: Array<BucketsUpdateColumn>;
  where?: InputMaybe<BucketsBoolExp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type BucketsOrderBy = {
  cacheControl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  downloadExpiration?: InputMaybe<OrderBy>;
  filesAggregate?: InputMaybe<FilesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  maxUploadFileSize?: InputMaybe<OrderBy>;
  minUploadFileSize?: InputMaybe<OrderBy>;
  presignedUrlsEnabled?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: storage.buckets */
export type BucketsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum BucketsSelectColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type BucketsSetInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type BucketsStddevFields = {
  __typename?: 'bucketsStddevFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BucketsStddev_PopFields = {
  __typename?: 'bucketsStddev_popFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BucketsStddev_SampFields = {
  __typename?: 'bucketsStddev_sampFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type BucketsSumFields = {
  __typename?: 'bucketsSumFields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum BucketsUpdateColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type BucketsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BucketsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};

/** aggregate var_pop on columns */
export type BucketsVar_PopFields = {
  __typename?: 'bucketsVar_popFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BucketsVar_SampFields = {
  __typename?: 'bucketsVar_sampFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BucketsVarianceFields = {
  __typename?: 'bucketsVarianceFields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Buckets_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_StreamCursorValueInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "classifications" */
export type Classifications_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Classifications_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Classifications_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "condition_field_type" */
export type Condition_Field_Type_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Condition_Field_Type_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Condition_Field_Type_StreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "condition_operator_type" */
export type Condition_Operator_Type_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Condition_Operator_Type_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Condition_Operator_Type_StreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "entities" */
export type Entities_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "entities" */
export type Entities_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "entities" */
export type Entities_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Entities_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Entities_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EntityTypeEnum>;
};

/** order by avg() on columns of table "entity_classification" */
export type Entity_Classification_Avg_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "entity_classification" */
export type Entity_Classification_Max_Order_By = {
  classificationId?: InputMaybe<OrderBy>;
  entityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "entity_classification" */
export type Entity_Classification_Min_Order_By = {
  classificationId?: InputMaybe<OrderBy>;
  entityId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "entity_classification" */
export type Entity_Classification_Stddev_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "entity_classification" */
export type Entity_Classification_Stddev_Pop_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "entity_classification" */
export type Entity_Classification_Stddev_Samp_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "entity_classification" */
export type Entity_Classification_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Entity_Classification_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Classification_StreamCursorValueInput = {
  classificationId?: InputMaybe<Scalars['uuid']>;
  entityId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "entity_classification" */
export type Entity_Classification_Sum_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "entity_classification" */
export type Entity_Classification_Var_Pop_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "entity_classification" */
export type Entity_Classification_Var_Samp_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "entity_classification" */
export type Entity_Classification_Variance_Order_By = {
  /** -1, 0, 1 = Unproductive, Neutral,Productive */
  productivityRating?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "entity_type" */
export type Entity_Type_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Entity_Type_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Type_StreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "event_file" */
export type Event_File_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "event_file" */
export type Event_File_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  fileId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "event_file" */
export type Event_File_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Event_File_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_File_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  fileId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "event_network" */
export type Event_Network_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "event_network" */
export type Event_Network_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "event_network" */
export type Event_Network_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Event_Network_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Network_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  networkId?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "event_windows" */
export type Event_Windows_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "event_windows" */
export type Event_Windows_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  eventId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processId?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "event_windows" */
export type Event_Windows_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Event_Windows_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Windows_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  eventId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isFocused?: InputMaybe<Scalars['Boolean']>;
  processId?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by avg() on columns of table "events" */
export type Events_Avg_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "events" */
export type Events_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  duration?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "events" */
export type Events_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  duration?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "events" */
export type Events_Stddev_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "events" */
export type Events_Stddev_Pop_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "events" */
export type Events_Stddev_Samp_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "events" */
export type Events_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Events_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  keystrokes?: InputMaybe<Scalars['Int']>;
  mouseClicks?: InputMaybe<Scalars['Int']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  secondsSinceLastInput?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** order by sum() on columns of table "events" */
export type Events_Sum_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "events" */
export type Events_Var_Pop_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "events" */
export type Events_Var_Samp_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "events" */
export type Events_Variance_Order_By = {
  duration?: InputMaybe<OrderBy>;
  keystrokes?: InputMaybe<OrderBy>;
  mouseClicks?: InputMaybe<OrderBy>;
  secondsSinceLastInput?: InputMaybe<OrderBy>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  /** An aggregate relationship */
  eventFilesAggregate: EventFileAggregate;
  /** An array relationship */
  event_files: Array<EventFile>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "storage.files" */
export type FilesEventFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


/** columns and relationships of "storage.files" */
export type FilesEvent_FilesArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};

/** aggregated selection of "storage.files" */
export type FilesAggregate = {
  __typename?: 'filesAggregate';
  aggregate?: Maybe<FilesAggregateFields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type FilesAggregateFields = {
  __typename?: 'filesAggregateFields';
  avg?: Maybe<FilesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FilesMaxFields>;
  min?: Maybe<FilesMinFields>;
  stddev?: Maybe<FilesStddevFields>;
  stddevPop?: Maybe<FilesStddev_PopFields>;
  stddevSamp?: Maybe<FilesStddev_SampFields>;
  sum?: Maybe<FilesSumFields>;
  varPop?: Maybe<FilesVar_PopFields>;
  varSamp?: Maybe<FilesVar_SampFields>;
  variance?: Maybe<FilesVarianceFields>;
};


/** aggregate fields of "storage.files" */
export type FilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type FilesAggregateOrderBy = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type FilesArrRelInsertInput = {
  data: Array<FilesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FilesOnConflict>;
};

/** aggregate avg on columns */
export type FilesAvgFields = {
  __typename?: 'filesAvgFields';
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type FilesBoolExp = {
  _and?: InputMaybe<Array<FilesBoolExp>>;
  _not?: InputMaybe<FilesBoolExp>;
  _or?: InputMaybe<Array<FilesBoolExp>>;
  bucket?: InputMaybe<BucketsBoolExp>;
  bucketId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  etag?: InputMaybe<StringComparisonExp>;
  event_files?: InputMaybe<EventFileBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isUploaded?: InputMaybe<BooleanComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploadedByUserId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum FilesConstraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type FilesIncInput = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type FilesInsertInput = {
  bucket?: InputMaybe<BucketsObjRelInsertInput>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  event_files?: InputMaybe<EventFileArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FilesMaxFields = {
  __typename?: 'filesMaxFields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type FilesMinFields = {
  __typename?: 'filesMinFields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "storage.files" */
export type FilesMutationResponse = {
  __typename?: 'filesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type FilesObjRelInsertInput = {
  data: FilesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<FilesOnConflict>;
};

/** on_conflict condition type for table "storage.files" */
export type FilesOnConflict = {
  constraint: FilesConstraint;
  update_columns?: Array<FilesUpdateColumn>;
  where?: InputMaybe<FilesBoolExp>;
};

/** Ordering options when selecting data from "storage.files". */
export type FilesOrderBy = {
  bucket?: InputMaybe<BucketsOrderBy>;
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  event_filesAggregate?: InputMaybe<EventFileAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  isUploaded?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: storage.files */
export type FilesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum FilesSelectColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type FilesSetInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FilesStddevFields = {
  __typename?: 'filesStddevFields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type FilesStddev_PopFields = {
  __typename?: 'filesStddev_popFields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type FilesStddev_SampFields = {
  __typename?: 'filesStddev_sampFields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type FilesSumFields = {
  __typename?: 'filesSumFields';
  size?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.files" */
export enum FilesUpdateColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type FilesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FilesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};

/** aggregate var_pop on columns */
export type FilesVar_PopFields = {
  __typename?: 'filesVar_popFields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type FilesVar_SampFields = {
  __typename?: 'filesVar_sampFields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type FilesVarianceFields = {
  __typename?: 'filesVarianceFields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "files" */
export type Files_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Files_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_StreamCursorValueInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<OrderBy>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** delete data from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<BucketsMutationResponse>;
  /** delete data from the table: "classifications" */
  deleteClassifications?: Maybe<ClassificationsMutationResponse>;
  /** delete single row from the table: "classifications" */
  deleteClassificationsByPk?: Maybe<Classifications>;
  /** delete data from the table: "condition_field_type" */
  deleteConditionFieldType?: Maybe<ConditionFieldTypeMutationResponse>;
  /** delete single row from the table: "condition_field_type" */
  deleteConditionFieldTypeByPk?: Maybe<ConditionFieldType>;
  /** delete data from the table: "condition_operator_type" */
  deleteConditionOperatorType?: Maybe<ConditionOperatorTypeMutationResponse>;
  /** delete single row from the table: "condition_operator_type" */
  deleteConditionOperatorTypeByPk?: Maybe<ConditionOperatorType>;
  /** delete data from the table: "entities" */
  deleteEntities?: Maybe<EntitiesMutationResponse>;
  /** delete single row from the table: "entities" */
  deleteEntitiesByPk?: Maybe<Entities>;
  /** delete data from the table: "entity_classification" */
  deleteEntityClassification?: Maybe<EntityClassificationMutationResponse>;
  /** delete single row from the table: "entity_classification" */
  deleteEntityClassificationByPk?: Maybe<EntityClassification>;
  /** delete data from the table: "entity_type" */
  deleteEntityType?: Maybe<EntityTypeMutationResponse>;
  /** delete single row from the table: "entity_type" */
  deleteEntityTypeByPk?: Maybe<EntityType>;
  /** delete data from the table: "event_file" */
  deleteEventFile?: Maybe<EventFileMutationResponse>;
  /** delete single row from the table: "event_file" */
  deleteEventFileByPk?: Maybe<EventFile>;
  /** delete data from the table: "event_network" */
  deleteEventNetwork?: Maybe<EventNetworkMutationResponse>;
  /** delete single row from the table: "event_network" */
  deleteEventNetworkByPk?: Maybe<EventNetwork>;
  /** delete data from the table: "event_windows" */
  deleteEventWindows?: Maybe<EventWindowsMutationResponse>;
  /** delete single row from the table: "event_windows" */
  deleteEventWindowsByPk?: Maybe<EventWindows>;
  /** delete data from the table: "events" */
  deleteEvents?: Maybe<EventsMutationResponse>;
  /** delete single row from the table: "events" */
  deleteEventsByPk?: Maybe<Events>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<FilesMutationResponse>;
  /** delete data from the table: "networks" */
  deleteNetworks?: Maybe<NetworksMutationResponse>;
  /** delete single row from the table: "networks" */
  deleteNetworksByPk?: Maybe<Networks>;
  /** delete data from the table: "organization_departments" */
  deleteOrganizationDepartments?: Maybe<OrganizationDepartmentsMutationResponse>;
  /** delete single row from the table: "organization_departments" */
  deleteOrganizationDepartmentsByPk?: Maybe<OrganizationDepartments>;
  /** delete data from the table: "organization_project" */
  deleteOrganizationProject?: Maybe<OrganizationProjectMutationResponse>;
  /** delete single row from the table: "organization_project" */
  deleteOrganizationProjectByPk?: Maybe<OrganizationProject>;
  /** delete data from the table: "organization_user" */
  deleteOrganizationUser?: Maybe<OrganizationUserMutationResponse>;
  /** delete single row from the table: "organization_user" */
  deleteOrganizationUserByPk?: Maybe<OrganizationUser>;
  /** delete data from the table: "organizations" */
  deleteOrganizations?: Maybe<OrganizationsMutationResponse>;
  /** delete single row from the table: "organizations" */
  deleteOrganizationsByPk?: Maybe<Organizations>;
  /** delete data from the table: "organizations_team" */
  deleteOrganizationsTeam?: Maybe<OrganizationsTeamMutationResponse>;
  /** delete single row from the table: "organizations_team" */
  deleteOrganizationsTeamByPk?: Maybe<OrganizationsTeam>;
  /** delete data from the table: "processes" */
  deleteProcesses?: Maybe<ProcessesMutationResponse>;
  /** delete single row from the table: "processes" */
  deleteProcessesByPk?: Maybe<Processes>;
  /** delete data from the table: "project_team" */
  deleteProjectTeam?: Maybe<ProjectTeamMutationResponse>;
  /** delete single row from the table: "project_team" */
  deleteProjectTeamByPk?: Maybe<ProjectTeam>;
  /** delete data from the table: "project_user" */
  deleteProjectUser?: Maybe<ProjectUserMutationResponse>;
  /** delete single row from the table: "project_user" */
  deleteProjectUserByPk?: Maybe<ProjectUser>;
  /** delete data from the table: "projects" */
  deleteProjects?: Maybe<ProjectsMutationResponse>;
  /** delete single row from the table: "projects" */
  deleteProjectsByPk?: Maybe<Projects>;
  /** delete data from the table: "rule_conditions" */
  deleteRuleConditions?: Maybe<RuleConditionsMutationResponse>;
  /** delete single row from the table: "rule_conditions" */
  deleteRuleConditionsByPk?: Maybe<RuleConditions>;
  /** delete data from the table: "rule_disposable" */
  deleteRuleDisposable?: Maybe<RuleDisposableMutationResponse>;
  /** delete single row from the table: "rule_disposable" */
  deleteRuleDisposableByPk?: Maybe<RuleDisposable>;
  /** delete data from the table: "rule_email" */
  deleteRuleEmail?: Maybe<RuleEmailMutationResponse>;
  /** delete single row from the table: "rule_email" */
  deleteRuleEmailByPk?: Maybe<RuleEmail>;
  /** delete data from the table: "rule_popup" */
  deleteRulePopup?: Maybe<RulePopupMutationResponse>;
  /** delete single row from the table: "rule_popup" */
  deleteRulePopupByPk?: Maybe<RulePopup>;
  /** delete data from the table: "rule_screenshot" */
  deleteRuleScreenshot?: Maybe<RuleScreenshotMutationResponse>;
  /** delete single row from the table: "rule_screenshot" */
  deleteRuleScreenshotByPk?: Maybe<RuleScreenshot>;
  /** delete data from the table: "rule_team" */
  deleteRuleTeam?: Maybe<RuleTeamMutationResponse>;
  /** delete single row from the table: "rule_team" */
  deleteRuleTeamByPk?: Maybe<RuleTeam>;
  /** delete data from the table: "rule_webhook" */
  deleteRuleWebhook?: Maybe<RuleWebhookMutationResponse>;
  /** delete single row from the table: "rule_webhook" */
  deleteRuleWebhookByPk?: Maybe<RuleWebhook>;
  /** delete data from the table: "rule_weight" */
  deleteRuleWeight?: Maybe<RuleWeightMutationResponse>;
  /** delete single row from the table: "rule_weight" */
  deleteRuleWeightByPk?: Maybe<RuleWeight>;
  /** delete data from the table: "rules" */
  deleteRules?: Maybe<RulesMutationResponse>;
  /** delete single row from the table: "rules" */
  deleteRulesByPk?: Maybe<Rules>;
  /** delete data from the table: "tags" */
  deleteTags?: Maybe<TagsMutationResponse>;
  /** delete single row from the table: "tags" */
  deleteTagsByPk?: Maybe<Tags>;
  /** delete data from the table: "team_team" */
  deleteTeamTeam?: Maybe<TeamTeamMutationResponse>;
  /** delete single row from the table: "team_team" */
  deleteTeamTeamByPk?: Maybe<TeamTeam>;
  /** delete data from the table: "teams" */
  deleteTeams?: Maybe<TeamsMutationResponse>;
  /** delete single row from the table: "teams" */
  deleteTeamsByPk?: Maybe<Teams>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "user_networks" */
  deleteUserNetworks?: Maybe<UserNetworksMutationResponse>;
  /** delete single row from the table: "user_networks" */
  deleteUserNetworksByPk?: Maybe<UserNetworks>;
  /** delete data from the table: "user_organization" */
  deleteUserOrganization?: Maybe<UserOrganizationMutationResponse>;
  /** delete single row from the table: "user_organization" */
  deleteUserOrganizationByPk?: Maybe<UserOrganization>;
  /** delete data from the table: "user_team" */
  deleteUserTeam?: Maybe<UserTeamMutationResponse>;
  /** delete single row from the table: "user_team" */
  deleteUserTeamByPk?: Maybe<UserTeam>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** insert data into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<BucketsMutationResponse>;
  /** insert data into the table: "classifications" */
  insertClassifications?: Maybe<ClassificationsMutationResponse>;
  /** insert a single row into the table: "classifications" */
  insertClassificationsOne?: Maybe<Classifications>;
  /** insert data into the table: "condition_field_type" */
  insertConditionFieldType?: Maybe<ConditionFieldTypeMutationResponse>;
  /** insert a single row into the table: "condition_field_type" */
  insertConditionFieldTypeOne?: Maybe<ConditionFieldType>;
  /** insert data into the table: "condition_operator_type" */
  insertConditionOperatorType?: Maybe<ConditionOperatorTypeMutationResponse>;
  /** insert a single row into the table: "condition_operator_type" */
  insertConditionOperatorTypeOne?: Maybe<ConditionOperatorType>;
  /** insert data into the table: "entities" */
  insertEntities?: Maybe<EntitiesMutationResponse>;
  /** insert a single row into the table: "entities" */
  insertEntitiesOne?: Maybe<Entities>;
  /** insert data into the table: "entity_classification" */
  insertEntityClassification?: Maybe<EntityClassificationMutationResponse>;
  /** insert a single row into the table: "entity_classification" */
  insertEntityClassificationOne?: Maybe<EntityClassification>;
  /** insert data into the table: "entity_type" */
  insertEntityType?: Maybe<EntityTypeMutationResponse>;
  /** insert a single row into the table: "entity_type" */
  insertEntityTypeOne?: Maybe<EntityType>;
  /** insert data into the table: "event_file" */
  insertEventFile?: Maybe<EventFileMutationResponse>;
  /** insert a single row into the table: "event_file" */
  insertEventFileOne?: Maybe<EventFile>;
  /** insert data into the table: "event_network" */
  insertEventNetwork?: Maybe<EventNetworkMutationResponse>;
  /** insert a single row into the table: "event_network" */
  insertEventNetworkOne?: Maybe<EventNetwork>;
  /** insert data into the table: "event_windows" */
  insertEventWindows?: Maybe<EventWindowsMutationResponse>;
  /** insert a single row into the table: "event_windows" */
  insertEventWindowsOne?: Maybe<EventWindows>;
  /** insert data into the table: "events" */
  insertEvents?: Maybe<EventsMutationResponse>;
  /** insert a single row into the table: "events" */
  insertEventsOne?: Maybe<Events>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<FilesMutationResponse>;
  /** insert data into the table: "networks" */
  insertNetworks?: Maybe<NetworksMutationResponse>;
  /** insert a single row into the table: "networks" */
  insertNetworksOne?: Maybe<Networks>;
  /** insert data into the table: "organization_departments" */
  insertOrganizationDepartments?: Maybe<OrganizationDepartmentsMutationResponse>;
  /** insert a single row into the table: "organization_departments" */
  insertOrganizationDepartmentsOne?: Maybe<OrganizationDepartments>;
  /** insert data into the table: "organization_project" */
  insertOrganizationProject?: Maybe<OrganizationProjectMutationResponse>;
  /** insert a single row into the table: "organization_project" */
  insertOrganizationProjectOne?: Maybe<OrganizationProject>;
  /** insert data into the table: "organization_user" */
  insertOrganizationUser?: Maybe<OrganizationUserMutationResponse>;
  /** insert a single row into the table: "organization_user" */
  insertOrganizationUserOne?: Maybe<OrganizationUser>;
  /** insert data into the table: "organizations" */
  insertOrganizations?: Maybe<OrganizationsMutationResponse>;
  /** insert a single row into the table: "organizations" */
  insertOrganizationsOne?: Maybe<Organizations>;
  /** insert data into the table: "organizations_team" */
  insertOrganizationsTeam?: Maybe<OrganizationsTeamMutationResponse>;
  /** insert a single row into the table: "organizations_team" */
  insertOrganizationsTeamOne?: Maybe<OrganizationsTeam>;
  /** insert data into the table: "processes" */
  insertProcesses?: Maybe<ProcessesMutationResponse>;
  /** insert a single row into the table: "processes" */
  insertProcessesOne?: Maybe<Processes>;
  /** insert data into the table: "project_team" */
  insertProjectTeam?: Maybe<ProjectTeamMutationResponse>;
  /** insert a single row into the table: "project_team" */
  insertProjectTeamOne?: Maybe<ProjectTeam>;
  /** insert data into the table: "project_user" */
  insertProjectUser?: Maybe<ProjectUserMutationResponse>;
  /** insert a single row into the table: "project_user" */
  insertProjectUserOne?: Maybe<ProjectUser>;
  /** insert data into the table: "projects" */
  insertProjects?: Maybe<ProjectsMutationResponse>;
  /** insert a single row into the table: "projects" */
  insertProjectsOne?: Maybe<Projects>;
  /** insert data into the table: "rule_conditions" */
  insertRuleConditions?: Maybe<RuleConditionsMutationResponse>;
  /** insert a single row into the table: "rule_conditions" */
  insertRuleConditionsOne?: Maybe<RuleConditions>;
  /** insert data into the table: "rule_disposable" */
  insertRuleDisposable?: Maybe<RuleDisposableMutationResponse>;
  /** insert a single row into the table: "rule_disposable" */
  insertRuleDisposableOne?: Maybe<RuleDisposable>;
  /** insert data into the table: "rule_email" */
  insertRuleEmail?: Maybe<RuleEmailMutationResponse>;
  /** insert a single row into the table: "rule_email" */
  insertRuleEmailOne?: Maybe<RuleEmail>;
  /** insert data into the table: "rule_popup" */
  insertRulePopup?: Maybe<RulePopupMutationResponse>;
  /** insert a single row into the table: "rule_popup" */
  insertRulePopupOne?: Maybe<RulePopup>;
  /** insert data into the table: "rule_screenshot" */
  insertRuleScreenshot?: Maybe<RuleScreenshotMutationResponse>;
  /** insert a single row into the table: "rule_screenshot" */
  insertRuleScreenshotOne?: Maybe<RuleScreenshot>;
  /** insert data into the table: "rule_team" */
  insertRuleTeam?: Maybe<RuleTeamMutationResponse>;
  /** insert a single row into the table: "rule_team" */
  insertRuleTeamOne?: Maybe<RuleTeam>;
  /** insert data into the table: "rule_webhook" */
  insertRuleWebhook?: Maybe<RuleWebhookMutationResponse>;
  /** insert a single row into the table: "rule_webhook" */
  insertRuleWebhookOne?: Maybe<RuleWebhook>;
  /** insert data into the table: "rule_weight" */
  insertRuleWeight?: Maybe<RuleWeightMutationResponse>;
  /** insert a single row into the table: "rule_weight" */
  insertRuleWeightOne?: Maybe<RuleWeight>;
  /** insert data into the table: "rules" */
  insertRules?: Maybe<RulesMutationResponse>;
  /** insert a single row into the table: "rules" */
  insertRulesOne?: Maybe<Rules>;
  /** insert data into the table: "tags" */
  insertTags?: Maybe<TagsMutationResponse>;
  /** insert a single row into the table: "tags" */
  insertTagsOne?: Maybe<Tags>;
  /** insert data into the table: "team_team" */
  insertTeamTeam?: Maybe<TeamTeamMutationResponse>;
  /** insert a single row into the table: "team_team" */
  insertTeamTeamOne?: Maybe<TeamTeam>;
  /** insert data into the table: "teams" */
  insertTeams?: Maybe<TeamsMutationResponse>;
  /** insert a single row into the table: "teams" */
  insertTeamsOne?: Maybe<Teams>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "user_networks" */
  insertUserNetworks?: Maybe<UserNetworksMutationResponse>;
  /** insert a single row into the table: "user_networks" */
  insertUserNetworksOne?: Maybe<UserNetworks>;
  /** insert data into the table: "user_organization" */
  insertUserOrganization?: Maybe<UserOrganizationMutationResponse>;
  /** insert a single row into the table: "user_organization" */
  insertUserOrganizationOne?: Maybe<UserOrganization>;
  /** insert data into the table: "user_team" */
  insertUserTeam?: Maybe<UserTeamMutationResponse>;
  /** insert a single row into the table: "user_team" */
  insertUserTeamOne?: Maybe<UserTeam>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update multiples rows of table: "auth.provider_requests" */
  updateAuthProviderRequestsMany?: Maybe<Array<Maybe<AuthProviderRequestsMutationResponse>>>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update multiples rows of table: "auth.providers" */
  updateAuthProvidersMany?: Maybe<Array<Maybe<AuthProvidersMutationResponse>>>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  updateAuthRefreshTokensMany?: Maybe<Array<Maybe<AuthRefreshTokensMutationResponse>>>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update multiples rows of table: "auth.roles" */
  updateAuthRolesMany?: Maybe<Array<Maybe<AuthRolesMutationResponse>>>;
  /** update single row of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** update data of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** update multiples rows of table: "auth.user_authenticators" */
  updateAuthUserAuthenticatorsMany?: Maybe<Array<Maybe<AuthUserAuthenticatorsMutationResponse>>>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update multiples rows of table: "auth.user_providers" */
  updateAuthUserProvidersMany?: Maybe<Array<Maybe<AuthUserProvidersMutationResponse>>>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update multiples rows of table: "auth.user_roles" */
  updateAuthUserRolesMany?: Maybe<Array<Maybe<AuthUserRolesMutationResponse>>>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<BucketsMutationResponse>;
  /** update multiples rows of table: "storage.buckets" */
  updateBucketsMany?: Maybe<Array<Maybe<BucketsMutationResponse>>>;
  /** update data of the table: "classifications" */
  updateClassifications?: Maybe<ClassificationsMutationResponse>;
  /** update single row of the table: "classifications" */
  updateClassificationsByPk?: Maybe<Classifications>;
  /** update multiples rows of table: "classifications" */
  updateClassificationsMany?: Maybe<Array<Maybe<ClassificationsMutationResponse>>>;
  /** update data of the table: "condition_field_type" */
  updateConditionFieldType?: Maybe<ConditionFieldTypeMutationResponse>;
  /** update single row of the table: "condition_field_type" */
  updateConditionFieldTypeByPk?: Maybe<ConditionFieldType>;
  /** update multiples rows of table: "condition_field_type" */
  updateConditionFieldTypeMany?: Maybe<Array<Maybe<ConditionFieldTypeMutationResponse>>>;
  /** update data of the table: "condition_operator_type" */
  updateConditionOperatorType?: Maybe<ConditionOperatorTypeMutationResponse>;
  /** update single row of the table: "condition_operator_type" */
  updateConditionOperatorTypeByPk?: Maybe<ConditionOperatorType>;
  /** update multiples rows of table: "condition_operator_type" */
  updateConditionOperatorTypeMany?: Maybe<Array<Maybe<ConditionOperatorTypeMutationResponse>>>;
  /** update data of the table: "entities" */
  updateEntities?: Maybe<EntitiesMutationResponse>;
  /** update single row of the table: "entities" */
  updateEntitiesByPk?: Maybe<Entities>;
  /** update multiples rows of table: "entities" */
  updateEntitiesMany?: Maybe<Array<Maybe<EntitiesMutationResponse>>>;
  /** update data of the table: "entity_classification" */
  updateEntityClassification?: Maybe<EntityClassificationMutationResponse>;
  /** update single row of the table: "entity_classification" */
  updateEntityClassificationByPk?: Maybe<EntityClassification>;
  /** update multiples rows of table: "entity_classification" */
  updateEntityClassificationMany?: Maybe<Array<Maybe<EntityClassificationMutationResponse>>>;
  /** update data of the table: "entity_type" */
  updateEntityType?: Maybe<EntityTypeMutationResponse>;
  /** update single row of the table: "entity_type" */
  updateEntityTypeByPk?: Maybe<EntityType>;
  /** update multiples rows of table: "entity_type" */
  updateEntityTypeMany?: Maybe<Array<Maybe<EntityTypeMutationResponse>>>;
  /** update data of the table: "event_file" */
  updateEventFile?: Maybe<EventFileMutationResponse>;
  /** update single row of the table: "event_file" */
  updateEventFileByPk?: Maybe<EventFile>;
  /** update multiples rows of table: "event_file" */
  updateEventFileMany?: Maybe<Array<Maybe<EventFileMutationResponse>>>;
  /** update data of the table: "event_network" */
  updateEventNetwork?: Maybe<EventNetworkMutationResponse>;
  /** update single row of the table: "event_network" */
  updateEventNetworkByPk?: Maybe<EventNetwork>;
  /** update multiples rows of table: "event_network" */
  updateEventNetworkMany?: Maybe<Array<Maybe<EventNetworkMutationResponse>>>;
  /** update data of the table: "event_windows" */
  updateEventWindows?: Maybe<EventWindowsMutationResponse>;
  /** update single row of the table: "event_windows" */
  updateEventWindowsByPk?: Maybe<EventWindows>;
  /** update multiples rows of table: "event_windows" */
  updateEventWindowsMany?: Maybe<Array<Maybe<EventWindowsMutationResponse>>>;
  /** update data of the table: "events" */
  updateEvents?: Maybe<EventsMutationResponse>;
  /** update single row of the table: "events" */
  updateEventsByPk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  updateEventsMany?: Maybe<Array<Maybe<EventsMutationResponse>>>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<FilesMutationResponse>;
  /** update multiples rows of table: "storage.files" */
  updateFilesMany?: Maybe<Array<Maybe<FilesMutationResponse>>>;
  /** update data of the table: "networks" */
  updateNetworks?: Maybe<NetworksMutationResponse>;
  /** update single row of the table: "networks" */
  updateNetworksByPk?: Maybe<Networks>;
  /** update multiples rows of table: "networks" */
  updateNetworksMany?: Maybe<Array<Maybe<NetworksMutationResponse>>>;
  /** update data of the table: "organization_departments" */
  updateOrganizationDepartments?: Maybe<OrganizationDepartmentsMutationResponse>;
  /** update single row of the table: "organization_departments" */
  updateOrganizationDepartmentsByPk?: Maybe<OrganizationDepartments>;
  /** update multiples rows of table: "organization_departments" */
  updateOrganizationDepartmentsMany?: Maybe<Array<Maybe<OrganizationDepartmentsMutationResponse>>>;
  /** update data of the table: "organization_project" */
  updateOrganizationProject?: Maybe<OrganizationProjectMutationResponse>;
  /** update single row of the table: "organization_project" */
  updateOrganizationProjectByPk?: Maybe<OrganizationProject>;
  /** update multiples rows of table: "organization_project" */
  updateOrganizationProjectMany?: Maybe<Array<Maybe<OrganizationProjectMutationResponse>>>;
  /** update data of the table: "organization_user" */
  updateOrganizationUser?: Maybe<OrganizationUserMutationResponse>;
  /** update single row of the table: "organization_user" */
  updateOrganizationUserByPk?: Maybe<OrganizationUser>;
  /** update multiples rows of table: "organization_user" */
  updateOrganizationUserMany?: Maybe<Array<Maybe<OrganizationUserMutationResponse>>>;
  /** update data of the table: "organizations" */
  updateOrganizations?: Maybe<OrganizationsMutationResponse>;
  /** update single row of the table: "organizations" */
  updateOrganizationsByPk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  updateOrganizationsMany?: Maybe<Array<Maybe<OrganizationsMutationResponse>>>;
  /** update data of the table: "organizations_team" */
  updateOrganizationsTeam?: Maybe<OrganizationsTeamMutationResponse>;
  /** update single row of the table: "organizations_team" */
  updateOrganizationsTeamByPk?: Maybe<OrganizationsTeam>;
  /** update multiples rows of table: "organizations_team" */
  updateOrganizationsTeamMany?: Maybe<Array<Maybe<OrganizationsTeamMutationResponse>>>;
  /** update data of the table: "processes" */
  updateProcesses?: Maybe<ProcessesMutationResponse>;
  /** update single row of the table: "processes" */
  updateProcessesByPk?: Maybe<Processes>;
  /** update multiples rows of table: "processes" */
  updateProcessesMany?: Maybe<Array<Maybe<ProcessesMutationResponse>>>;
  /** update data of the table: "project_team" */
  updateProjectTeam?: Maybe<ProjectTeamMutationResponse>;
  /** update single row of the table: "project_team" */
  updateProjectTeamByPk?: Maybe<ProjectTeam>;
  /** update multiples rows of table: "project_team" */
  updateProjectTeamMany?: Maybe<Array<Maybe<ProjectTeamMutationResponse>>>;
  /** update data of the table: "project_user" */
  updateProjectUser?: Maybe<ProjectUserMutationResponse>;
  /** update single row of the table: "project_user" */
  updateProjectUserByPk?: Maybe<ProjectUser>;
  /** update multiples rows of table: "project_user" */
  updateProjectUserMany?: Maybe<Array<Maybe<ProjectUserMutationResponse>>>;
  /** update data of the table: "projects" */
  updateProjects?: Maybe<ProjectsMutationResponse>;
  /** update single row of the table: "projects" */
  updateProjectsByPk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  updateProjectsMany?: Maybe<Array<Maybe<ProjectsMutationResponse>>>;
  /** update data of the table: "rule_conditions" */
  updateRuleConditions?: Maybe<RuleConditionsMutationResponse>;
  /** update single row of the table: "rule_conditions" */
  updateRuleConditionsByPk?: Maybe<RuleConditions>;
  /** update multiples rows of table: "rule_conditions" */
  updateRuleConditionsMany?: Maybe<Array<Maybe<RuleConditionsMutationResponse>>>;
  /** update data of the table: "rule_disposable" */
  updateRuleDisposable?: Maybe<RuleDisposableMutationResponse>;
  /** update single row of the table: "rule_disposable" */
  updateRuleDisposableByPk?: Maybe<RuleDisposable>;
  /** update multiples rows of table: "rule_disposable" */
  updateRuleDisposableMany?: Maybe<Array<Maybe<RuleDisposableMutationResponse>>>;
  /** update data of the table: "rule_email" */
  updateRuleEmail?: Maybe<RuleEmailMutationResponse>;
  /** update single row of the table: "rule_email" */
  updateRuleEmailByPk?: Maybe<RuleEmail>;
  /** update multiples rows of table: "rule_email" */
  updateRuleEmailMany?: Maybe<Array<Maybe<RuleEmailMutationResponse>>>;
  /** update data of the table: "rule_popup" */
  updateRulePopup?: Maybe<RulePopupMutationResponse>;
  /** update single row of the table: "rule_popup" */
  updateRulePopupByPk?: Maybe<RulePopup>;
  /** update multiples rows of table: "rule_popup" */
  updateRulePopupMany?: Maybe<Array<Maybe<RulePopupMutationResponse>>>;
  /** update data of the table: "rule_screenshot" */
  updateRuleScreenshot?: Maybe<RuleScreenshotMutationResponse>;
  /** update single row of the table: "rule_screenshot" */
  updateRuleScreenshotByPk?: Maybe<RuleScreenshot>;
  /** update multiples rows of table: "rule_screenshot" */
  updateRuleScreenshotMany?: Maybe<Array<Maybe<RuleScreenshotMutationResponse>>>;
  /** update data of the table: "rule_team" */
  updateRuleTeam?: Maybe<RuleTeamMutationResponse>;
  /** update single row of the table: "rule_team" */
  updateRuleTeamByPk?: Maybe<RuleTeam>;
  /** update multiples rows of table: "rule_team" */
  updateRuleTeamMany?: Maybe<Array<Maybe<RuleTeamMutationResponse>>>;
  /** update data of the table: "rule_webhook" */
  updateRuleWebhook?: Maybe<RuleWebhookMutationResponse>;
  /** update single row of the table: "rule_webhook" */
  updateRuleWebhookByPk?: Maybe<RuleWebhook>;
  /** update multiples rows of table: "rule_webhook" */
  updateRuleWebhookMany?: Maybe<Array<Maybe<RuleWebhookMutationResponse>>>;
  /** update data of the table: "rule_weight" */
  updateRuleWeight?: Maybe<RuleWeightMutationResponse>;
  /** update single row of the table: "rule_weight" */
  updateRuleWeightByPk?: Maybe<RuleWeight>;
  /** update multiples rows of table: "rule_weight" */
  updateRuleWeightMany?: Maybe<Array<Maybe<RuleWeightMutationResponse>>>;
  /** update data of the table: "rules" */
  updateRules?: Maybe<RulesMutationResponse>;
  /** update single row of the table: "rules" */
  updateRulesByPk?: Maybe<Rules>;
  /** update multiples rows of table: "rules" */
  updateRulesMany?: Maybe<Array<Maybe<RulesMutationResponse>>>;
  /** update data of the table: "tags" */
  updateTags?: Maybe<TagsMutationResponse>;
  /** update single row of the table: "tags" */
  updateTagsByPk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  updateTagsMany?: Maybe<Array<Maybe<TagsMutationResponse>>>;
  /** update data of the table: "team_team" */
  updateTeamTeam?: Maybe<TeamTeamMutationResponse>;
  /** update single row of the table: "team_team" */
  updateTeamTeamByPk?: Maybe<TeamTeam>;
  /** update multiples rows of table: "team_team" */
  updateTeamTeamMany?: Maybe<Array<Maybe<TeamTeamMutationResponse>>>;
  /** update data of the table: "teams" */
  updateTeams?: Maybe<TeamsMutationResponse>;
  /** update single row of the table: "teams" */
  updateTeamsByPk?: Maybe<Teams>;
  /** update multiples rows of table: "teams" */
  updateTeamsMany?: Maybe<Array<Maybe<TeamsMutationResponse>>>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "user_networks" */
  updateUserNetworks?: Maybe<UserNetworksMutationResponse>;
  /** update single row of the table: "user_networks" */
  updateUserNetworksByPk?: Maybe<UserNetworks>;
  /** update multiples rows of table: "user_networks" */
  updateUserNetworksMany?: Maybe<Array<Maybe<UserNetworksMutationResponse>>>;
  /** update data of the table: "user_organization" */
  updateUserOrganization?: Maybe<UserOrganizationMutationResponse>;
  /** update single row of the table: "user_organization" */
  updateUserOrganizationByPk?: Maybe<UserOrganization>;
  /** update multiples rows of table: "user_organization" */
  updateUserOrganizationMany?: Maybe<Array<Maybe<UserOrganizationMutationResponse>>>;
  /** update data of the table: "user_team" */
  updateUserTeam?: Maybe<UserTeamMutationResponse>;
  /** update single row of the table: "user_team" */
  updateUserTeamByPk?: Maybe<UserTeam>;
  /** update multiples rows of table: "user_team" */
  updateUserTeamMany?: Maybe<Array<Maybe<UserTeamMutationResponse>>>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update multiples rows of table: "auth.users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserAuthenticatorsArgs = {
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: BucketsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClassificationsArgs = {
  where: ClassificationsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteClassificationsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteConditionFieldTypeArgs = {
  where: ConditionFieldTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteConditionFieldTypeByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteConditionOperatorTypeArgs = {
  where: ConditionOperatorTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteConditionOperatorTypeByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteEntitiesArgs = {
  where: EntitiesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEntitiesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEntityClassificationArgs = {
  where: EntityClassificationBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEntityClassificationByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEntityTypeArgs = {
  where: EntityTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEntityTypeByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteEventFileArgs = {
  where: EventFileBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEventFileByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEventNetworkArgs = {
  where: EventNetworkBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEventNetworkByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEventWindowsArgs = {
  where: EventWindowsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEventWindowsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEventsArgs = {
  where: EventsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteEventsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: FilesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteNetworksArgs = {
  where: NetworksBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteNetworksByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationDepartmentsArgs = {
  where: OrganizationDepartmentsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationDepartmentsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationProjectArgs = {
  where: OrganizationProjectBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationProjectByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationUserArgs = {
  where: OrganizationUserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsArgs = {
  where: OrganizationsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsTeamArgs = {
  where: OrganizationsTeamBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsTeamByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProcessesArgs = {
  where: ProcessesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProcessesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProjectTeamArgs = {
  where: ProjectTeamBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectTeamByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProjectUserArgs = {
  where: ProjectUserBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProjectsArgs = {
  where: ProjectsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleConditionsArgs = {
  where: RuleConditionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleConditionsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleDisposableArgs = {
  where: RuleDisposableBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleDisposableByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleEmailArgs = {
  where: RuleEmailBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleEmailByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRulePopupArgs = {
  where: RulePopupBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRulePopupByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleScreenshotArgs = {
  where: RuleScreenshotBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleScreenshotByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleTeamArgs = {
  where: RuleTeamBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleTeamByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleWebhookArgs = {
  where: RuleWebhookBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleWebhookByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRuleWeightArgs = {
  where: RuleWeightBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRuleWeightByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRulesArgs = {
  where: RulesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRulesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTagsArgs = {
  where: TagsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTagsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTeamTeamArgs = {
  where: TeamTeamBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTeamTeamByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTeamsArgs = {
  where: TeamsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTeamsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserNetworksArgs = {
  where: UserNetworksBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserNetworksByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserOrganizationArgs = {
  where: UserOrganizationBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserOrganizationByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUserTeamArgs = {
  where: UserTeamBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserTeamByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  onConflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  onConflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorArgs = {
  object: AuthUserAuthenticatorsInsertInput;
  onConflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserAuthenticatorsArgs = {
  objects: Array<AuthUserAuthenticatorsInsertInput>;
  onConflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: BucketsInsertInput;
  onConflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<BucketsInsertInput>;
  onConflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClassificationsArgs = {
  objects: Array<ClassificationsInsertInput>;
  onConflict?: InputMaybe<ClassificationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertClassificationsOneArgs = {
  object: ClassificationsInsertInput;
  onConflict?: InputMaybe<ClassificationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertConditionFieldTypeArgs = {
  objects: Array<ConditionFieldTypeInsertInput>;
  onConflict?: InputMaybe<ConditionFieldTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertConditionFieldTypeOneArgs = {
  object: ConditionFieldTypeInsertInput;
  onConflict?: InputMaybe<ConditionFieldTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertConditionOperatorTypeArgs = {
  objects: Array<ConditionOperatorTypeInsertInput>;
  onConflict?: InputMaybe<ConditionOperatorTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertConditionOperatorTypeOneArgs = {
  object: ConditionOperatorTypeInsertInput;
  onConflict?: InputMaybe<ConditionOperatorTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntitiesArgs = {
  objects: Array<EntitiesInsertInput>;
  onConflict?: InputMaybe<EntitiesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntitiesOneArgs = {
  object: EntitiesInsertInput;
  onConflict?: InputMaybe<EntitiesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntityClassificationArgs = {
  objects: Array<EntityClassificationInsertInput>;
  onConflict?: InputMaybe<EntityClassificationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntityClassificationOneArgs = {
  object: EntityClassificationInsertInput;
  onConflict?: InputMaybe<EntityClassificationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntityTypeArgs = {
  objects: Array<EntityTypeInsertInput>;
  onConflict?: InputMaybe<EntityTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEntityTypeOneArgs = {
  object: EntityTypeInsertInput;
  onConflict?: InputMaybe<EntityTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventFileArgs = {
  objects: Array<EventFileInsertInput>;
  onConflict?: InputMaybe<EventFileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventFileOneArgs = {
  object: EventFileInsertInput;
  onConflict?: InputMaybe<EventFileOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventNetworkArgs = {
  objects: Array<EventNetworkInsertInput>;
  onConflict?: InputMaybe<EventNetworkOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventNetworkOneArgs = {
  object: EventNetworkInsertInput;
  onConflict?: InputMaybe<EventNetworkOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventWindowsArgs = {
  objects: Array<EventWindowsInsertInput>;
  onConflict?: InputMaybe<EventWindowsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventWindowsOneArgs = {
  object: EventWindowsInsertInput;
  onConflict?: InputMaybe<EventWindowsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventsArgs = {
  objects: Array<EventsInsertInput>;
  onConflict?: InputMaybe<EventsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertEventsOneArgs = {
  object: EventsInsertInput;
  onConflict?: InputMaybe<EventsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: FilesInsertInput;
  onConflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<FilesInsertInput>;
  onConflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertNetworksArgs = {
  objects: Array<NetworksInsertInput>;
  onConflict?: InputMaybe<NetworksOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertNetworksOneArgs = {
  object: NetworksInsertInput;
  onConflict?: InputMaybe<NetworksOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationDepartmentsArgs = {
  objects: Array<OrganizationDepartmentsInsertInput>;
  onConflict?: InputMaybe<OrganizationDepartmentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationDepartmentsOneArgs = {
  object: OrganizationDepartmentsInsertInput;
  onConflict?: InputMaybe<OrganizationDepartmentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationProjectArgs = {
  objects: Array<OrganizationProjectInsertInput>;
  onConflict?: InputMaybe<OrganizationProjectOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationProjectOneArgs = {
  object: OrganizationProjectInsertInput;
  onConflict?: InputMaybe<OrganizationProjectOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationUserArgs = {
  objects: Array<OrganizationUserInsertInput>;
  onConflict?: InputMaybe<OrganizationUserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationUserOneArgs = {
  object: OrganizationUserInsertInput;
  onConflict?: InputMaybe<OrganizationUserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationsArgs = {
  objects: Array<OrganizationsInsertInput>;
  onConflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationsOneArgs = {
  object: OrganizationsInsertInput;
  onConflict?: InputMaybe<OrganizationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationsTeamArgs = {
  objects: Array<OrganizationsTeamInsertInput>;
  onConflict?: InputMaybe<OrganizationsTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationsTeamOneArgs = {
  object: OrganizationsTeamInsertInput;
  onConflict?: InputMaybe<OrganizationsTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProcessesArgs = {
  objects: Array<ProcessesInsertInput>;
  onConflict?: InputMaybe<ProcessesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProcessesOneArgs = {
  object: ProcessesInsertInput;
  onConflict?: InputMaybe<ProcessesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectTeamArgs = {
  objects: Array<ProjectTeamInsertInput>;
  onConflict?: InputMaybe<ProjectTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectTeamOneArgs = {
  object: ProjectTeamInsertInput;
  onConflict?: InputMaybe<ProjectTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectUserArgs = {
  objects: Array<ProjectUserInsertInput>;
  onConflict?: InputMaybe<ProjectUserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectUserOneArgs = {
  object: ProjectUserInsertInput;
  onConflict?: InputMaybe<ProjectUserOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsArgs = {
  objects: Array<ProjectsInsertInput>;
  onConflict?: InputMaybe<ProjectsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsOneArgs = {
  object: ProjectsInsertInput;
  onConflict?: InputMaybe<ProjectsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleConditionsArgs = {
  objects: Array<RuleConditionsInsertInput>;
  onConflict?: InputMaybe<RuleConditionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleConditionsOneArgs = {
  object: RuleConditionsInsertInput;
  onConflict?: InputMaybe<RuleConditionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleDisposableArgs = {
  objects: Array<RuleDisposableInsertInput>;
  onConflict?: InputMaybe<RuleDisposableOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleDisposableOneArgs = {
  object: RuleDisposableInsertInput;
  onConflict?: InputMaybe<RuleDisposableOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleEmailArgs = {
  objects: Array<RuleEmailInsertInput>;
  onConflict?: InputMaybe<RuleEmailOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleEmailOneArgs = {
  object: RuleEmailInsertInput;
  onConflict?: InputMaybe<RuleEmailOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRulePopupArgs = {
  objects: Array<RulePopupInsertInput>;
  onConflict?: InputMaybe<RulePopupOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRulePopupOneArgs = {
  object: RulePopupInsertInput;
  onConflict?: InputMaybe<RulePopupOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleScreenshotArgs = {
  objects: Array<RuleScreenshotInsertInput>;
  onConflict?: InputMaybe<RuleScreenshotOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleScreenshotOneArgs = {
  object: RuleScreenshotInsertInput;
  onConflict?: InputMaybe<RuleScreenshotOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleTeamArgs = {
  objects: Array<RuleTeamInsertInput>;
  onConflict?: InputMaybe<RuleTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleTeamOneArgs = {
  object: RuleTeamInsertInput;
  onConflict?: InputMaybe<RuleTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleWebhookArgs = {
  objects: Array<RuleWebhookInsertInput>;
  onConflict?: InputMaybe<RuleWebhookOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleWebhookOneArgs = {
  object: RuleWebhookInsertInput;
  onConflict?: InputMaybe<RuleWebhookOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleWeightArgs = {
  objects: Array<RuleWeightInsertInput>;
  onConflict?: InputMaybe<RuleWeightOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRuleWeightOneArgs = {
  object: RuleWeightInsertInput;
  onConflict?: InputMaybe<RuleWeightOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRulesArgs = {
  objects: Array<RulesInsertInput>;
  onConflict?: InputMaybe<RulesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRulesOneArgs = {
  object: RulesInsertInput;
  onConflict?: InputMaybe<RulesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTagsArgs = {
  objects: Array<TagsInsertInput>;
  onConflict?: InputMaybe<TagsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTagsOneArgs = {
  object: TagsInsertInput;
  onConflict?: InputMaybe<TagsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamTeamArgs = {
  objects: Array<TeamTeamInsertInput>;
  onConflict?: InputMaybe<TeamTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamTeamOneArgs = {
  object: TeamTeamInsertInput;
  onConflict?: InputMaybe<TeamTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamsArgs = {
  objects: Array<TeamsInsertInput>;
  onConflict?: InputMaybe<TeamsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeamsOneArgs = {
  object: TeamsInsertInput;
  onConflict?: InputMaybe<TeamsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserNetworksArgs = {
  objects: Array<UserNetworksInsertInput>;
  onConflict?: InputMaybe<UserNetworksOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserNetworksOneArgs = {
  object: UserNetworksInsertInput;
  onConflict?: InputMaybe<UserNetworksOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOrganizationArgs = {
  objects: Array<UserOrganizationInsertInput>;
  onConflict?: InputMaybe<UserOrganizationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserOrganizationOneArgs = {
  object: UserOrganizationInsertInput;
  onConflict?: InputMaybe<UserOrganizationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserTeamArgs = {
  objects: Array<UserTeamInsertInput>;
  onConflict?: InputMaybe<UserTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserTeamOneArgs = {
  object: UserTeamInsertInput;
  onConflict?: InputMaybe<UserTeamOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsManyArgs = {
  updates: Array<AuthProviderRequestsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersManyArgs = {
  updates: Array<AuthProvidersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensManyArgs = {
  updates: Array<AuthRefreshTokensUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesManyArgs = {
  updates: Array<AuthRolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  pk_columns: AuthUserAuthenticatorsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorsArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserAuthenticatorsManyArgs = {
  updates: Array<AuthUserAuthenticatorsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersManyArgs = {
  updates: Array<AuthUserProvidersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesManyArgs = {
  updates: Array<AuthUserRolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  pk_columns: BucketsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateBucketsManyArgs = {
  updates: Array<BucketsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateClassificationsArgs = {
  _set?: InputMaybe<ClassificationsSetInput>;
  where: ClassificationsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateClassificationsByPkArgs = {
  _set?: InputMaybe<ClassificationsSetInput>;
  pk_columns: ClassificationsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateClassificationsManyArgs = {
  updates: Array<ClassificationsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateConditionFieldTypeArgs = {
  _set?: InputMaybe<ConditionFieldTypeSetInput>;
  where: ConditionFieldTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateConditionFieldTypeByPkArgs = {
  _set?: InputMaybe<ConditionFieldTypeSetInput>;
  pk_columns: ConditionFieldTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateConditionFieldTypeManyArgs = {
  updates: Array<ConditionFieldTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateConditionOperatorTypeArgs = {
  _set?: InputMaybe<ConditionOperatorTypeSetInput>;
  where: ConditionOperatorTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateConditionOperatorTypeByPkArgs = {
  _set?: InputMaybe<ConditionOperatorTypeSetInput>;
  pk_columns: ConditionOperatorTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateConditionOperatorTypeManyArgs = {
  updates: Array<ConditionOperatorTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEntitiesArgs = {
  _set?: InputMaybe<EntitiesSetInput>;
  where: EntitiesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEntitiesByPkArgs = {
  _set?: InputMaybe<EntitiesSetInput>;
  pk_columns: EntitiesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEntitiesManyArgs = {
  updates: Array<EntitiesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEntityClassificationArgs = {
  _inc?: InputMaybe<EntityClassificationIncInput>;
  _set?: InputMaybe<EntityClassificationSetInput>;
  where: EntityClassificationBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEntityClassificationByPkArgs = {
  _inc?: InputMaybe<EntityClassificationIncInput>;
  _set?: InputMaybe<EntityClassificationSetInput>;
  pk_columns: EntityClassificationPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEntityClassificationManyArgs = {
  updates: Array<EntityClassificationUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEntityTypeArgs = {
  _set?: InputMaybe<EntityTypeSetInput>;
  where: EntityTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEntityTypeByPkArgs = {
  _set?: InputMaybe<EntityTypeSetInput>;
  pk_columns: EntityTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEntityTypeManyArgs = {
  updates: Array<EntityTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEventFileArgs = {
  _set?: InputMaybe<EventFileSetInput>;
  where: EventFileBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEventFileByPkArgs = {
  _set?: InputMaybe<EventFileSetInput>;
  pk_columns: EventFilePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEventFileManyArgs = {
  updates: Array<EventFileUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEventNetworkArgs = {
  _set?: InputMaybe<EventNetworkSetInput>;
  where: EventNetworkBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEventNetworkByPkArgs = {
  _set?: InputMaybe<EventNetworkSetInput>;
  pk_columns: EventNetworkPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEventNetworkManyArgs = {
  updates: Array<EventNetworkUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEventWindowsArgs = {
  _set?: InputMaybe<EventWindowsSetInput>;
  where: EventWindowsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEventWindowsByPkArgs = {
  _set?: InputMaybe<EventWindowsSetInput>;
  pk_columns: EventWindowsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEventWindowsManyArgs = {
  updates: Array<EventWindowsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateEventsArgs = {
  _inc?: InputMaybe<EventsIncInput>;
  _set?: InputMaybe<EventsSetInput>;
  where: EventsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateEventsByPkArgs = {
  _inc?: InputMaybe<EventsIncInput>;
  _set?: InputMaybe<EventsSetInput>;
  pk_columns: EventsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateEventsManyArgs = {
  updates: Array<EventsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  pk_columns: FilesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateFilesManyArgs = {
  updates: Array<FilesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateNetworksArgs = {
  _set?: InputMaybe<NetworksSetInput>;
  where: NetworksBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateNetworksByPkArgs = {
  _set?: InputMaybe<NetworksSetInput>;
  pk_columns: NetworksPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateNetworksManyArgs = {
  updates: Array<NetworksUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationDepartmentsArgs = {
  _set?: InputMaybe<OrganizationDepartmentsSetInput>;
  where: OrganizationDepartmentsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationDepartmentsByPkArgs = {
  _set?: InputMaybe<OrganizationDepartmentsSetInput>;
  pk_columns: OrganizationDepartmentsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationDepartmentsManyArgs = {
  updates: Array<OrganizationDepartmentsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationProjectArgs = {
  _set?: InputMaybe<OrganizationProjectSetInput>;
  where: OrganizationProjectBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationProjectByPkArgs = {
  _set?: InputMaybe<OrganizationProjectSetInput>;
  pk_columns: OrganizationProjectPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationProjectManyArgs = {
  updates: Array<OrganizationProjectUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationUserArgs = {
  _set?: InputMaybe<OrganizationUserSetInput>;
  where: OrganizationUserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationUserByPkArgs = {
  _set?: InputMaybe<OrganizationUserSetInput>;
  pk_columns: OrganizationUserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationUserManyArgs = {
  updates: Array<OrganizationUserUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsArgs = {
  _set?: InputMaybe<OrganizationsSetInput>;
  where: OrganizationsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsByPkArgs = {
  _set?: InputMaybe<OrganizationsSetInput>;
  pk_columns: OrganizationsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsManyArgs = {
  updates: Array<OrganizationsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsTeamArgs = {
  _set?: InputMaybe<OrganizationsTeamSetInput>;
  where: OrganizationsTeamBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsTeamByPkArgs = {
  _set?: InputMaybe<OrganizationsTeamSetInput>;
  pk_columns: OrganizationsTeamPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsTeamManyArgs = {
  updates: Array<OrganizationsTeamUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProcessesArgs = {
  _inc?: InputMaybe<ProcessesIncInput>;
  _set?: InputMaybe<ProcessesSetInput>;
  where: ProcessesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProcessesByPkArgs = {
  _inc?: InputMaybe<ProcessesIncInput>;
  _set?: InputMaybe<ProcessesSetInput>;
  pk_columns: ProcessesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProcessesManyArgs = {
  updates: Array<ProcessesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectTeamArgs = {
  _set?: InputMaybe<ProjectTeamSetInput>;
  where: ProjectTeamBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectTeamByPkArgs = {
  _set?: InputMaybe<ProjectTeamSetInput>;
  pk_columns: ProjectTeamPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectTeamManyArgs = {
  updates: Array<ProjectTeamUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectUserArgs = {
  _set?: InputMaybe<ProjectUserSetInput>;
  where: ProjectUserBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectUserByPkArgs = {
  _set?: InputMaybe<ProjectUserSetInput>;
  pk_columns: ProjectUserPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectUserManyArgs = {
  updates: Array<ProjectUserUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectsArgs = {
  _set?: InputMaybe<ProjectsSetInput>;
  where: ProjectsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectsByPkArgs = {
  _set?: InputMaybe<ProjectsSetInput>;
  pk_columns: ProjectsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectsManyArgs = {
  updates: Array<ProjectsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleConditionsArgs = {
  _set?: InputMaybe<RuleConditionsSetInput>;
  where: RuleConditionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleConditionsByPkArgs = {
  _set?: InputMaybe<RuleConditionsSetInput>;
  pk_columns: RuleConditionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleConditionsManyArgs = {
  updates: Array<RuleConditionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleDisposableArgs = {
  _set?: InputMaybe<RuleDisposableSetInput>;
  where: RuleDisposableBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleDisposableByPkArgs = {
  _set?: InputMaybe<RuleDisposableSetInput>;
  pk_columns: RuleDisposablePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleDisposableManyArgs = {
  updates: Array<RuleDisposableUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleEmailArgs = {
  _set?: InputMaybe<RuleEmailSetInput>;
  where: RuleEmailBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleEmailByPkArgs = {
  _set?: InputMaybe<RuleEmailSetInput>;
  pk_columns: RuleEmailPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleEmailManyArgs = {
  updates: Array<RuleEmailUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRulePopupArgs = {
  _set?: InputMaybe<RulePopupSetInput>;
  where: RulePopupBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRulePopupByPkArgs = {
  _set?: InputMaybe<RulePopupSetInput>;
  pk_columns: RulePopupPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRulePopupManyArgs = {
  updates: Array<RulePopupUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleScreenshotArgs = {
  _inc?: InputMaybe<RuleScreenshotIncInput>;
  _set?: InputMaybe<RuleScreenshotSetInput>;
  where: RuleScreenshotBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleScreenshotByPkArgs = {
  _inc?: InputMaybe<RuleScreenshotIncInput>;
  _set?: InputMaybe<RuleScreenshotSetInput>;
  pk_columns: RuleScreenshotPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleScreenshotManyArgs = {
  updates: Array<RuleScreenshotUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleTeamArgs = {
  _set?: InputMaybe<RuleTeamSetInput>;
  where: RuleTeamBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleTeamByPkArgs = {
  _set?: InputMaybe<RuleTeamSetInput>;
  pk_columns: RuleTeamPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleTeamManyArgs = {
  updates: Array<RuleTeamUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleWebhookArgs = {
  _set?: InputMaybe<RuleWebhookSetInput>;
  where: RuleWebhookBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleWebhookByPkArgs = {
  _set?: InputMaybe<RuleWebhookSetInput>;
  pk_columns: RuleWebhookPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleWebhookManyArgs = {
  updates: Array<RuleWebhookUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRuleWeightArgs = {
  _inc?: InputMaybe<RuleWeightIncInput>;
  _set?: InputMaybe<RuleWeightSetInput>;
  where: RuleWeightBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRuleWeightByPkArgs = {
  _inc?: InputMaybe<RuleWeightIncInput>;
  _set?: InputMaybe<RuleWeightSetInput>;
  pk_columns: RuleWeightPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRuleWeightManyArgs = {
  updates: Array<RuleWeightUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRulesArgs = {
  _set?: InputMaybe<RulesSetInput>;
  where: RulesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRulesByPkArgs = {
  _set?: InputMaybe<RulesSetInput>;
  pk_columns: RulesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRulesManyArgs = {
  updates: Array<RulesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTagsArgs = {
  _set?: InputMaybe<TagsSetInput>;
  where: TagsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTagsByPkArgs = {
  _set?: InputMaybe<TagsSetInput>;
  pk_columns: TagsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTagsManyArgs = {
  updates: Array<TagsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTeamTeamArgs = {
  _set?: InputMaybe<TeamTeamSetInput>;
  where: TeamTeamBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTeamTeamByPkArgs = {
  _set?: InputMaybe<TeamTeamSetInput>;
  pk_columns: TeamTeamPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTeamTeamManyArgs = {
  updates: Array<TeamTeamUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTeamsArgs = {
  _set?: InputMaybe<TeamsSetInput>;
  where: TeamsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTeamsByPkArgs = {
  _set?: InputMaybe<TeamsSetInput>;
  pk_columns: TeamsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTeamsManyArgs = {
  updates: Array<TeamsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserNetworksArgs = {
  _set?: InputMaybe<UserNetworksSetInput>;
  where: UserNetworksBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserNetworksByPkArgs = {
  _set?: InputMaybe<UserNetworksSetInput>;
  pk_columns: UserNetworksPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserNetworksManyArgs = {
  updates: Array<UserNetworksUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserOrganizationArgs = {
  _set?: InputMaybe<UserOrganizationSetInput>;
  where: UserOrganizationBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserOrganizationByPkArgs = {
  _set?: InputMaybe<UserOrganizationSetInput>;
  pk_columns: UserOrganizationPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserOrganizationManyArgs = {
  updates: Array<UserOrganizationUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserTeamArgs = {
  _set?: InputMaybe<UserTeamSetInput>;
  where: UserTeamBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserTeamByPkArgs = {
  _set?: InputMaybe<UserTeamSetInput>;
  pk_columns: UserTeamPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserTeamManyArgs = {
  updates: Array<UserTeamUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};

/** Streaming cursor of the table "networks" */
export type Networks_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Networks_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Networks_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organization_departments" */
export type Organization_Departments_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "organization_departments" */
export type Organization_Departments_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "organization_departments" */
export type Organization_Departments_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Organization_Departments_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Departments_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "organization_project" */
export type Organization_Project_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "organization_project" */
export type Organization_Project_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "organization_project" */
export type Organization_Project_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Organization_Project_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Project_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organization_user" */
export type Organization_User_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "organization_user" */
export type Organization_User_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "organization_user" */
export type Organization_User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Organization_User_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_User_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Organizations_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_StreamCursorValueInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organizations_team" */
export type Organizations_Team_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "organizations_team" */
export type Organizations_Team_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "organizations_team" */
export type Organizations_Team_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Organizations_Team_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Team_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "processes" */
export type Processes_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Processes_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Processes_StreamCursorValueInput = {
  cmd?: InputMaybe<Scalars['String']>;
  cpuUsage?: InputMaybe<Scalars['float8']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exe?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  memory?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "project_team" */
export type Project_Team_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "project_team" */
export type Project_Team_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_team" */
export type Project_Team_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Project_Team_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Team_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_user" */
export type Project_User_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "project_user" */
export type Project_User_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_user" */
export type Project_User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Project_User_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_User_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Projects_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table: "classifications" */
  classifications: Array<Classifications>;
  /** fetch aggregated fields from the table: "classifications" */
  classificationsAggregate: ClassificationsAggregate;
  /** fetch data from the table: "classifications" using primary key columns */
  classificationsByPk?: Maybe<Classifications>;
  /** fetch data from the table: "condition_field_type" */
  conditionFieldType: Array<ConditionFieldType>;
  /** fetch aggregated fields from the table: "condition_field_type" */
  conditionFieldTypeAggregate: ConditionFieldTypeAggregate;
  /** fetch data from the table: "condition_field_type" using primary key columns */
  conditionFieldTypeByPk?: Maybe<ConditionFieldType>;
  /** fetch data from the table: "condition_operator_type" */
  conditionOperatorType: Array<ConditionOperatorType>;
  /** fetch aggregated fields from the table: "condition_operator_type" */
  conditionOperatorTypeAggregate: ConditionOperatorTypeAggregate;
  /** fetch data from the table: "condition_operator_type" using primary key columns */
  conditionOperatorTypeByPk?: Maybe<ConditionOperatorType>;
  /** An array relationship */
  entities: Array<Entities>;
  /** An aggregate relationship */
  entitiesAggregate: EntitiesAggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entitiesByPk?: Maybe<Entities>;
  /** fetch data from the table: "entity_classification" */
  entityClassification: Array<EntityClassification>;
  /** fetch aggregated fields from the table: "entity_classification" */
  entityClassificationAggregate: EntityClassificationAggregate;
  /** fetch data from the table: "entity_classification" using primary key columns */
  entityClassificationByPk?: Maybe<EntityClassification>;
  /** fetch data from the table: "entity_type" */
  entityType: Array<EntityType>;
  /** fetch aggregated fields from the table: "entity_type" */
  entityTypeAggregate: EntityTypeAggregate;
  /** fetch data from the table: "entity_type" using primary key columns */
  entityTypeByPk?: Maybe<EntityType>;
  /** fetch data from the table: "event_file" */
  eventFile: Array<EventFile>;
  /** fetch aggregated fields from the table: "event_file" */
  eventFileAggregate: EventFileAggregate;
  /** fetch data from the table: "event_file" using primary key columns */
  eventFileByPk?: Maybe<EventFile>;
  /** fetch data from the table: "event_network" */
  eventNetwork: Array<EventNetwork>;
  /** fetch aggregated fields from the table: "event_network" */
  eventNetworkAggregate: EventNetworkAggregate;
  /** fetch data from the table: "event_network" using primary key columns */
  eventNetworkByPk?: Maybe<EventNetwork>;
  /** An array relationship */
  eventWindows: Array<EventWindows>;
  /** An aggregate relationship */
  eventWindowsAggregate: EventWindowsAggregate;
  /** fetch data from the table: "event_windows" using primary key columns */
  eventWindowsByPk?: Maybe<EventWindows>;
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  eventsAggregate: EventsAggregate;
  /** fetch data from the table: "events" using primary key columns */
  eventsByPk?: Maybe<Events>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "networks" */
  networks: Array<Networks>;
  /** fetch aggregated fields from the table: "networks" */
  networksAggregate: NetworksAggregate;
  /** fetch data from the table: "networks" using primary key columns */
  networksByPk?: Maybe<Networks>;
  /** An array relationship */
  organizationDepartments: Array<OrganizationDepartments>;
  /** An aggregate relationship */
  organizationDepartmentsAggregate: OrganizationDepartmentsAggregate;
  /** fetch data from the table: "organization_departments" using primary key columns */
  organizationDepartmentsByPk?: Maybe<OrganizationDepartments>;
  /** fetch data from the table: "organization_project" */
  organizationProject: Array<OrganizationProject>;
  /** fetch aggregated fields from the table: "organization_project" */
  organizationProjectAggregate: OrganizationProjectAggregate;
  /** fetch data from the table: "organization_project" using primary key columns */
  organizationProjectByPk?: Maybe<OrganizationProject>;
  /** fetch data from the table: "organization_user" */
  organizationUser: Array<OrganizationUser>;
  /** fetch aggregated fields from the table: "organization_user" */
  organizationUserAggregate: OrganizationUserAggregate;
  /** fetch data from the table: "organization_user" using primary key columns */
  organizationUserByPk?: Maybe<OrganizationUser>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizationsByPk?: Maybe<Organizations>;
  /** fetch data from the table: "organizations_team" */
  organizationsTeam: Array<OrganizationsTeam>;
  /** fetch aggregated fields from the table: "organizations_team" */
  organizationsTeamAggregate: OrganizationsTeamAggregate;
  /** fetch data from the table: "organizations_team" using primary key columns */
  organizationsTeamByPk?: Maybe<OrganizationsTeam>;
  /** fetch data from the table: "processes" */
  processes: Array<Processes>;
  /** fetch aggregated fields from the table: "processes" */
  processesAggregate: ProcessesAggregate;
  /** fetch data from the table: "processes" using primary key columns */
  processesByPk?: Maybe<Processes>;
  /** fetch data from the table: "project_team" */
  projectTeam: Array<ProjectTeam>;
  /** fetch aggregated fields from the table: "project_team" */
  projectTeamAggregate: ProjectTeamAggregate;
  /** fetch data from the table: "project_team" using primary key columns */
  projectTeamByPk?: Maybe<ProjectTeam>;
  /** fetch data from the table: "project_user" */
  projectUser: Array<ProjectUser>;
  /** fetch aggregated fields from the table: "project_user" */
  projectUserAggregate: ProjectUserAggregate;
  /** fetch data from the table: "project_user" using primary key columns */
  projectUserByPk?: Maybe<ProjectUser>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** An array relationship */
  ruleConditions: Array<RuleConditions>;
  /** An aggregate relationship */
  ruleConditionsAggregate: RuleConditionsAggregate;
  /** fetch data from the table: "rule_conditions" using primary key columns */
  ruleConditionsByPk?: Maybe<RuleConditions>;
  /** fetch data from the table: "rule_disposable" */
  ruleDisposable: Array<RuleDisposable>;
  /** fetch aggregated fields from the table: "rule_disposable" */
  ruleDisposableAggregate: RuleDisposableAggregate;
  /** fetch data from the table: "rule_disposable" using primary key columns */
  ruleDisposableByPk?: Maybe<RuleDisposable>;
  /** fetch data from the table: "rule_email" */
  ruleEmail: Array<RuleEmail>;
  /** fetch aggregated fields from the table: "rule_email" */
  ruleEmailAggregate: RuleEmailAggregate;
  /** fetch data from the table: "rule_email" using primary key columns */
  ruleEmailByPk?: Maybe<RuleEmail>;
  /** fetch data from the table: "rule_popup" */
  rulePopup: Array<RulePopup>;
  /** fetch aggregated fields from the table: "rule_popup" */
  rulePopupAggregate: RulePopupAggregate;
  /** fetch data from the table: "rule_popup" using primary key columns */
  rulePopupByPk?: Maybe<RulePopup>;
  /** fetch data from the table: "rule_screenshot" */
  ruleScreenshot: Array<RuleScreenshot>;
  /** fetch aggregated fields from the table: "rule_screenshot" */
  ruleScreenshotAggregate: RuleScreenshotAggregate;
  /** fetch data from the table: "rule_screenshot" using primary key columns */
  ruleScreenshotByPk?: Maybe<RuleScreenshot>;
  /** fetch data from the table: "rule_team" */
  ruleTeam: Array<RuleTeam>;
  /** fetch aggregated fields from the table: "rule_team" */
  ruleTeamAggregate: RuleTeamAggregate;
  /** fetch data from the table: "rule_team" using primary key columns */
  ruleTeamByPk?: Maybe<RuleTeam>;
  /** fetch data from the table: "rule_webhook" */
  ruleWebhook: Array<RuleWebhook>;
  /** fetch aggregated fields from the table: "rule_webhook" */
  ruleWebhookAggregate: RuleWebhookAggregate;
  /** fetch data from the table: "rule_webhook" using primary key columns */
  ruleWebhookByPk?: Maybe<RuleWebhook>;
  /** fetch data from the table: "rule_weight" */
  ruleWeight: Array<RuleWeight>;
  /** fetch aggregated fields from the table: "rule_weight" */
  ruleWeightAggregate: RuleWeightAggregate;
  /** fetch data from the table: "rule_weight" using primary key columns */
  ruleWeightByPk?: Maybe<RuleWeight>;
  /** An array relationship */
  rules: Array<Rules>;
  /** An aggregate relationship */
  rulesAggregate: RulesAggregate;
  /** fetch data from the table: "rules" using primary key columns */
  rulesByPk?: Maybe<Rules>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tagsAggregate: TagsAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tagsByPk?: Maybe<Tags>;
  /** fetch data from the table: "team_team" */
  teamTeam: Array<TeamTeam>;
  /** fetch aggregated fields from the table: "team_team" */
  teamTeamAggregate: TeamTeamAggregate;
  /** fetch data from the table: "team_team" using primary key columns */
  teamTeamByPk?: Maybe<TeamTeam>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teamsAggregate: TeamsAggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teamsByPk?: Maybe<Teams>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  userNetworks: Array<UserNetworks>;
  /** An aggregate relationship */
  userNetworksAggregate: UserNetworksAggregate;
  /** fetch data from the table: "user_networks" using primary key columns */
  userNetworksByPk?: Maybe<UserNetworks>;
  /** fetch data from the table: "user_organization" */
  userOrganization: Array<UserOrganization>;
  /** fetch aggregated fields from the table: "user_organization" */
  userOrganizationAggregate: UserOrganizationAggregate;
  /** fetch data from the table: "user_organization" using primary key columns */
  userOrganizationByPk?: Maybe<UserOrganization>;
  /** fetch data from the table: "user_team" */
  userTeam: Array<UserTeam>;
  /** fetch aggregated fields from the table: "user_team" */
  userTeamAggregate: UserTeamAggregate;
  /** fetch data from the table: "user_team" using primary key columns */
  userTeamByPk?: Maybe<UserTeam>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Query_RootAuthProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Query_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserAuthenticatorsArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type Query_RootAuthUserAuthenticatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinctOn?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinctOn?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type Query_RootClassificationsArgs = {
  distinctOn?: InputMaybe<Array<ClassificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClassificationsOrderBy>>;
  where?: InputMaybe<ClassificationsBoolExp>;
};


export type Query_RootClassificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClassificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClassificationsOrderBy>>;
  where?: InputMaybe<ClassificationsBoolExp>;
};


export type Query_RootClassificationsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootConditionFieldTypeArgs = {
  distinctOn?: InputMaybe<Array<ConditionFieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionFieldTypeOrderBy>>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};


export type Query_RootConditionFieldTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConditionFieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionFieldTypeOrderBy>>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};


export type Query_RootConditionFieldTypeByPkArgs = {
  value: Scalars['String'];
};


export type Query_RootConditionOperatorTypeArgs = {
  distinctOn?: InputMaybe<Array<ConditionOperatorTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionOperatorTypeOrderBy>>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};


export type Query_RootConditionOperatorTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConditionOperatorTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionOperatorTypeOrderBy>>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};


export type Query_RootConditionOperatorTypeByPkArgs = {
  value: Scalars['String'];
};


export type Query_RootEntitiesArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type Query_RootEntitiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type Query_RootEntitiesByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEntityClassificationArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


export type Query_RootEntityClassificationAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


export type Query_RootEntityClassificationByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEntityTypeArgs = {
  distinctOn?: InputMaybe<Array<EntityTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityTypeOrderBy>>;
  where?: InputMaybe<EntityTypeBoolExp>;
};


export type Query_RootEntityTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityTypeOrderBy>>;
  where?: InputMaybe<EntityTypeBoolExp>;
};


export type Query_RootEntityTypeByPkArgs = {
  value: Scalars['String'];
};


export type Query_RootEventFileArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


export type Query_RootEventFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


export type Query_RootEventFileByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventNetworkArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


export type Query_RootEventNetworkAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


export type Query_RootEventNetworkByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventWindowsArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


export type Query_RootEventWindowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


export type Query_RootEventWindowsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type Query_RootEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type Query_RootEventsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type Query_RootFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type Query_RootNetworksArgs = {
  distinctOn?: InputMaybe<Array<NetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NetworksOrderBy>>;
  where?: InputMaybe<NetworksBoolExp>;
};


export type Query_RootNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<NetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NetworksOrderBy>>;
  where?: InputMaybe<NetworksBoolExp>;
};


export type Query_RootNetworksByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationDepartmentsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


export type Query_RootOrganizationDepartmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


export type Query_RootOrganizationDepartmentsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationProjectArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


export type Query_RootOrganizationProjectAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


export type Query_RootOrganizationProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationUserArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


export type Query_RootOrganizationUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


export type Query_RootOrganizationUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type Query_RootOrganizationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type Query_RootOrganizationsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationsTeamArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


export type Query_RootOrganizationsTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


export type Query_RootOrganizationsTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProcessesArgs = {
  distinctOn?: InputMaybe<Array<ProcessesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProcessesOrderBy>>;
  where?: InputMaybe<ProcessesBoolExp>;
};


export type Query_RootProcessesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProcessesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProcessesOrderBy>>;
  where?: InputMaybe<ProcessesBoolExp>;
};


export type Query_RootProcessesByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectTeamArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


export type Query_RootProjectTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


export type Query_RootProjectTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectUserArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


export type Query_RootProjectUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


export type Query_RootProjectUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleConditionsArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


export type Query_RootRuleConditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


export type Query_RootRuleConditionsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleDisposableArgs = {
  distinctOn?: InputMaybe<Array<RuleDisposableSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleDisposableOrderBy>>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};


export type Query_RootRuleDisposableAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleDisposableSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleDisposableOrderBy>>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};


export type Query_RootRuleDisposableByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleEmailArgs = {
  distinctOn?: InputMaybe<Array<RuleEmailSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleEmailOrderBy>>;
  where?: InputMaybe<RuleEmailBoolExp>;
};


export type Query_RootRuleEmailAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleEmailSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleEmailOrderBy>>;
  where?: InputMaybe<RuleEmailBoolExp>;
};


export type Query_RootRuleEmailByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRulePopupArgs = {
  distinctOn?: InputMaybe<Array<RulePopupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulePopupOrderBy>>;
  where?: InputMaybe<RulePopupBoolExp>;
};


export type Query_RootRulePopupAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulePopupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulePopupOrderBy>>;
  where?: InputMaybe<RulePopupBoolExp>;
};


export type Query_RootRulePopupByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleScreenshotArgs = {
  distinctOn?: InputMaybe<Array<RuleScreenshotSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleScreenshotOrderBy>>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};


export type Query_RootRuleScreenshotAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleScreenshotSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleScreenshotOrderBy>>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};


export type Query_RootRuleScreenshotByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleTeamArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


export type Query_RootRuleTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


export type Query_RootRuleTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleWebhookArgs = {
  distinctOn?: InputMaybe<Array<RuleWebhookSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWebhookOrderBy>>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};


export type Query_RootRuleWebhookAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleWebhookSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWebhookOrderBy>>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};


export type Query_RootRuleWebhookByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRuleWeightArgs = {
  distinctOn?: InputMaybe<Array<RuleWeightSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWeightOrderBy>>;
  where?: InputMaybe<RuleWeightBoolExp>;
};


export type Query_RootRuleWeightAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleWeightSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWeightOrderBy>>;
  where?: InputMaybe<RuleWeightBoolExp>;
};


export type Query_RootRuleWeightByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRulesArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


export type Query_RootRulesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


export type Query_RootRulesByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTagsArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Query_RootTagsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Query_RootTagsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeamTeamArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


export type Query_RootTeamTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


export type Query_RootTeamTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Query_RootTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Query_RootTeamsByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserNetworksArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


export type Query_RootUserNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


export type Query_RootUserNetworksByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserOrganizationArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


export type Query_RootUserOrganizationAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


export type Query_RootUserOrganizationByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserTeamArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


export type Query_RootUserTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


export type Query_RootUserTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** order by max() on columns of table "rule_conditions" */
export type Rule_Conditions_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "rule_conditions" */
export type Rule_Conditions_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "rule_conditions" */
export type Rule_Conditions_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Conditions_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Conditions_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fieldType?: InputMaybe<ConditionFieldTypeEnum>;
  id?: InputMaybe<Scalars['uuid']>;
  isCaseSensitive?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  operatorType?: InputMaybe<ConditionOperatorTypeEnum>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rule_disposable" */
export type Rule_Disposable_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Disposable_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Disposable_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "rule_email" */
export type Rule_Email_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Email_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Email_StreamCursorValueInput = {
  body?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isBounced?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  subject?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rule_popup" */
export type Rule_Popup_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Popup_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Popup_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rule_screenshot" */
export type Rule_Screenshot_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Screenshot_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Screenshot_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  interval?: InputMaybe<Scalars['Int']>;
  isMultiple?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
};

/** order by max() on columns of table "rule_team" */
export type Rule_Team_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "rule_team" */
export type Rule_Team_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "rule_team" */
export type Rule_Team_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Team_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Team_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "rule_webhook" */
export type Rule_Webhook_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Webhook_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Webhook_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  parameters?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rule_weight" */
export type Rule_Weight_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rule_Weight_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rule_Weight_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** order by max() on columns of table "rules" */
export type Rules_Max_Order_By = {
  externalId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "rules" */
export type Rules_Min_Order_By = {
  externalId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  ruleId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "rules" */
export type Rules_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Rules_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Rules_StreamCursorValueInput = {
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isOr?: InputMaybe<Scalars['Boolean']>;
  isSealed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['uuid']>;
  ruleId?: InputMaybe<Scalars['uuid']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table in a streaming manner : "auth.provider_requests" */
  authProviderRequestsStream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table in a streaming manner : "auth.providers" */
  authProvidersStream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table in a streaming manner : "auth.refresh_tokens" */
  authRefreshTokensStream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table in a streaming manner : "auth.roles" */
  authRolesStream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table in a streaming manner : "auth.user_authenticators" */
  authUserAuthenticatorsStream: Array<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table in a streaming manner : "auth.user_providers" */
  authUserProvidersStream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table in a streaming manner : "auth.user_roles" */
  authUserRolesStream: Array<AuthUserRoles>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table in a streaming manner : "storage.buckets" */
  bucketsStream: Array<Buckets>;
  /** fetch data from the table: "classifications" */
  classifications: Array<Classifications>;
  /** fetch aggregated fields from the table: "classifications" */
  classificationsAggregate: ClassificationsAggregate;
  /** fetch data from the table: "classifications" using primary key columns */
  classificationsByPk?: Maybe<Classifications>;
  /** fetch data from the table in a streaming manner : "classifications" */
  classificationsStream: Array<Classifications>;
  /** fetch data from the table: "condition_field_type" */
  conditionFieldType: Array<ConditionFieldType>;
  /** fetch aggregated fields from the table: "condition_field_type" */
  conditionFieldTypeAggregate: ConditionFieldTypeAggregate;
  /** fetch data from the table: "condition_field_type" using primary key columns */
  conditionFieldTypeByPk?: Maybe<ConditionFieldType>;
  /** fetch data from the table in a streaming manner : "condition_field_type" */
  conditionFieldTypeStream: Array<ConditionFieldType>;
  /** fetch data from the table: "condition_operator_type" */
  conditionOperatorType: Array<ConditionOperatorType>;
  /** fetch aggregated fields from the table: "condition_operator_type" */
  conditionOperatorTypeAggregate: ConditionOperatorTypeAggregate;
  /** fetch data from the table: "condition_operator_type" using primary key columns */
  conditionOperatorTypeByPk?: Maybe<ConditionOperatorType>;
  /** fetch data from the table in a streaming manner : "condition_operator_type" */
  conditionOperatorTypeStream: Array<ConditionOperatorType>;
  /** An array relationship */
  entities: Array<Entities>;
  /** An aggregate relationship */
  entitiesAggregate: EntitiesAggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entitiesByPk?: Maybe<Entities>;
  /** fetch data from the table in a streaming manner : "entities" */
  entitiesStream: Array<Entities>;
  /** fetch data from the table: "entity_classification" */
  entityClassification: Array<EntityClassification>;
  /** fetch aggregated fields from the table: "entity_classification" */
  entityClassificationAggregate: EntityClassificationAggregate;
  /** fetch data from the table: "entity_classification" using primary key columns */
  entityClassificationByPk?: Maybe<EntityClassification>;
  /** fetch data from the table in a streaming manner : "entity_classification" */
  entityClassificationStream: Array<EntityClassification>;
  /** fetch data from the table: "entity_type" */
  entityType: Array<EntityType>;
  /** fetch aggregated fields from the table: "entity_type" */
  entityTypeAggregate: EntityTypeAggregate;
  /** fetch data from the table: "entity_type" using primary key columns */
  entityTypeByPk?: Maybe<EntityType>;
  /** fetch data from the table in a streaming manner : "entity_type" */
  entityTypeStream: Array<EntityType>;
  /** fetch data from the table: "event_file" */
  eventFile: Array<EventFile>;
  /** fetch aggregated fields from the table: "event_file" */
  eventFileAggregate: EventFileAggregate;
  /** fetch data from the table: "event_file" using primary key columns */
  eventFileByPk?: Maybe<EventFile>;
  /** fetch data from the table in a streaming manner : "event_file" */
  eventFileStream: Array<EventFile>;
  /** fetch data from the table: "event_network" */
  eventNetwork: Array<EventNetwork>;
  /** fetch aggregated fields from the table: "event_network" */
  eventNetworkAggregate: EventNetworkAggregate;
  /** fetch data from the table: "event_network" using primary key columns */
  eventNetworkByPk?: Maybe<EventNetwork>;
  /** fetch data from the table in a streaming manner : "event_network" */
  eventNetworkStream: Array<EventNetwork>;
  /** An array relationship */
  eventWindows: Array<EventWindows>;
  /** An aggregate relationship */
  eventWindowsAggregate: EventWindowsAggregate;
  /** fetch data from the table: "event_windows" using primary key columns */
  eventWindowsByPk?: Maybe<EventWindows>;
  /** fetch data from the table in a streaming manner : "event_windows" */
  eventWindowsStream: Array<EventWindows>;
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  eventsAggregate: EventsAggregate;
  /** fetch data from the table: "events" using primary key columns */
  eventsByPk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner : "events" */
  eventsStream: Array<Events>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  filesAggregate: FilesAggregate;
  /** fetch data from the table in a streaming manner : "storage.files" */
  filesStream: Array<Files>;
  /** fetch data from the table: "networks" */
  networks: Array<Networks>;
  /** fetch aggregated fields from the table: "networks" */
  networksAggregate: NetworksAggregate;
  /** fetch data from the table: "networks" using primary key columns */
  networksByPk?: Maybe<Networks>;
  /** fetch data from the table in a streaming manner : "networks" */
  networksStream: Array<Networks>;
  /** An array relationship */
  organizationDepartments: Array<OrganizationDepartments>;
  /** An aggregate relationship */
  organizationDepartmentsAggregate: OrganizationDepartmentsAggregate;
  /** fetch data from the table: "organization_departments" using primary key columns */
  organizationDepartmentsByPk?: Maybe<OrganizationDepartments>;
  /** fetch data from the table in a streaming manner : "organization_departments" */
  organizationDepartmentsStream: Array<OrganizationDepartments>;
  /** fetch data from the table: "organization_project" */
  organizationProject: Array<OrganizationProject>;
  /** fetch aggregated fields from the table: "organization_project" */
  organizationProjectAggregate: OrganizationProjectAggregate;
  /** fetch data from the table: "organization_project" using primary key columns */
  organizationProjectByPk?: Maybe<OrganizationProject>;
  /** fetch data from the table in a streaming manner : "organization_project" */
  organizationProjectStream: Array<OrganizationProject>;
  /** fetch data from the table: "organization_user" */
  organizationUser: Array<OrganizationUser>;
  /** fetch aggregated fields from the table: "organization_user" */
  organizationUserAggregate: OrganizationUserAggregate;
  /** fetch data from the table: "organization_user" using primary key columns */
  organizationUserByPk?: Maybe<OrganizationUser>;
  /** fetch data from the table in a streaming manner : "organization_user" */
  organizationUserStream: Array<OrganizationUser>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: OrganizationsAggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizationsByPk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner : "organizations" */
  organizationsStream: Array<Organizations>;
  /** fetch data from the table: "organizations_team" */
  organizationsTeam: Array<OrganizationsTeam>;
  /** fetch aggregated fields from the table: "organizations_team" */
  organizationsTeamAggregate: OrganizationsTeamAggregate;
  /** fetch data from the table: "organizations_team" using primary key columns */
  organizationsTeamByPk?: Maybe<OrganizationsTeam>;
  /** fetch data from the table in a streaming manner : "organizations_team" */
  organizationsTeamStream: Array<OrganizationsTeam>;
  /** fetch data from the table: "processes" */
  processes: Array<Processes>;
  /** fetch aggregated fields from the table: "processes" */
  processesAggregate: ProcessesAggregate;
  /** fetch data from the table: "processes" using primary key columns */
  processesByPk?: Maybe<Processes>;
  /** fetch data from the table in a streaming manner : "processes" */
  processesStream: Array<Processes>;
  /** fetch data from the table: "project_team" */
  projectTeam: Array<ProjectTeam>;
  /** fetch aggregated fields from the table: "project_team" */
  projectTeamAggregate: ProjectTeamAggregate;
  /** fetch data from the table: "project_team" using primary key columns */
  projectTeamByPk?: Maybe<ProjectTeam>;
  /** fetch data from the table in a streaming manner : "project_team" */
  projectTeamStream: Array<ProjectTeam>;
  /** fetch data from the table: "project_user" */
  projectUser: Array<ProjectUser>;
  /** fetch aggregated fields from the table: "project_user" */
  projectUserAggregate: ProjectUserAggregate;
  /** fetch data from the table: "project_user" using primary key columns */
  projectUserByPk?: Maybe<ProjectUser>;
  /** fetch data from the table in a streaming manner : "project_user" */
  projectUserStream: Array<ProjectUser>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner : "projects" */
  projectsStream: Array<Projects>;
  /** An array relationship */
  ruleConditions: Array<RuleConditions>;
  /** An aggregate relationship */
  ruleConditionsAggregate: RuleConditionsAggregate;
  /** fetch data from the table: "rule_conditions" using primary key columns */
  ruleConditionsByPk?: Maybe<RuleConditions>;
  /** fetch data from the table in a streaming manner : "rule_conditions" */
  ruleConditionsStream: Array<RuleConditions>;
  /** fetch data from the table: "rule_disposable" */
  ruleDisposable: Array<RuleDisposable>;
  /** fetch aggregated fields from the table: "rule_disposable" */
  ruleDisposableAggregate: RuleDisposableAggregate;
  /** fetch data from the table: "rule_disposable" using primary key columns */
  ruleDisposableByPk?: Maybe<RuleDisposable>;
  /** fetch data from the table in a streaming manner : "rule_disposable" */
  ruleDisposableStream: Array<RuleDisposable>;
  /** fetch data from the table: "rule_email" */
  ruleEmail: Array<RuleEmail>;
  /** fetch aggregated fields from the table: "rule_email" */
  ruleEmailAggregate: RuleEmailAggregate;
  /** fetch data from the table: "rule_email" using primary key columns */
  ruleEmailByPk?: Maybe<RuleEmail>;
  /** fetch data from the table in a streaming manner : "rule_email" */
  ruleEmailStream: Array<RuleEmail>;
  /** fetch data from the table: "rule_popup" */
  rulePopup: Array<RulePopup>;
  /** fetch aggregated fields from the table: "rule_popup" */
  rulePopupAggregate: RulePopupAggregate;
  /** fetch data from the table: "rule_popup" using primary key columns */
  rulePopupByPk?: Maybe<RulePopup>;
  /** fetch data from the table in a streaming manner : "rule_popup" */
  rulePopupStream: Array<RulePopup>;
  /** fetch data from the table: "rule_screenshot" */
  ruleScreenshot: Array<RuleScreenshot>;
  /** fetch aggregated fields from the table: "rule_screenshot" */
  ruleScreenshotAggregate: RuleScreenshotAggregate;
  /** fetch data from the table: "rule_screenshot" using primary key columns */
  ruleScreenshotByPk?: Maybe<RuleScreenshot>;
  /** fetch data from the table in a streaming manner : "rule_screenshot" */
  ruleScreenshotStream: Array<RuleScreenshot>;
  /** fetch data from the table: "rule_team" */
  ruleTeam: Array<RuleTeam>;
  /** fetch aggregated fields from the table: "rule_team" */
  ruleTeamAggregate: RuleTeamAggregate;
  /** fetch data from the table: "rule_team" using primary key columns */
  ruleTeamByPk?: Maybe<RuleTeam>;
  /** fetch data from the table in a streaming manner : "rule_team" */
  ruleTeamStream: Array<RuleTeam>;
  /** fetch data from the table: "rule_webhook" */
  ruleWebhook: Array<RuleWebhook>;
  /** fetch aggregated fields from the table: "rule_webhook" */
  ruleWebhookAggregate: RuleWebhookAggregate;
  /** fetch data from the table: "rule_webhook" using primary key columns */
  ruleWebhookByPk?: Maybe<RuleWebhook>;
  /** fetch data from the table in a streaming manner : "rule_webhook" */
  ruleWebhookStream: Array<RuleWebhook>;
  /** fetch data from the table: "rule_weight" */
  ruleWeight: Array<RuleWeight>;
  /** fetch aggregated fields from the table: "rule_weight" */
  ruleWeightAggregate: RuleWeightAggregate;
  /** fetch data from the table: "rule_weight" using primary key columns */
  ruleWeightByPk?: Maybe<RuleWeight>;
  /** fetch data from the table in a streaming manner : "rule_weight" */
  ruleWeightStream: Array<RuleWeight>;
  /** An array relationship */
  rules: Array<Rules>;
  /** An aggregate relationship */
  rulesAggregate: RulesAggregate;
  /** fetch data from the table: "rules" using primary key columns */
  rulesByPk?: Maybe<Rules>;
  /** fetch data from the table in a streaming manner : "rules" */
  rulesStream: Array<Rules>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tagsAggregate: TagsAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tagsByPk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner : "tags" */
  tagsStream: Array<Tags>;
  /** fetch data from the table: "team_team" */
  teamTeam: Array<TeamTeam>;
  /** fetch aggregated fields from the table: "team_team" */
  teamTeamAggregate: TeamTeamAggregate;
  /** fetch data from the table: "team_team" using primary key columns */
  teamTeamByPk?: Maybe<TeamTeam>;
  /** fetch data from the table in a streaming manner : "team_team" */
  teamTeamStream: Array<TeamTeam>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teamsAggregate: TeamsAggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teamsByPk?: Maybe<Teams>;
  /** fetch data from the table in a streaming manner : "teams" */
  teamsStream: Array<Teams>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  userNetworks: Array<UserNetworks>;
  /** An aggregate relationship */
  userNetworksAggregate: UserNetworksAggregate;
  /** fetch data from the table: "user_networks" using primary key columns */
  userNetworksByPk?: Maybe<UserNetworks>;
  /** fetch data from the table in a streaming manner : "user_networks" */
  userNetworksStream: Array<UserNetworks>;
  /** fetch data from the table: "user_organization" */
  userOrganization: Array<UserOrganization>;
  /** fetch aggregated fields from the table: "user_organization" */
  userOrganizationAggregate: UserOrganizationAggregate;
  /** fetch data from the table: "user_organization" using primary key columns */
  userOrganizationByPk?: Maybe<UserOrganization>;
  /** fetch data from the table in a streaming manner : "user_organization" */
  userOrganizationStream: Array<UserOrganization>;
  /** fetch data from the table: "user_team" */
  userTeam: Array<UserTeam>;
  /** fetch aggregated fields from the table: "user_team" */
  userTeamAggregate: UserTeamAggregate;
  /** fetch data from the table: "user_team" using primary key columns */
  userTeamByPk?: Maybe<UserTeam>;
  /** fetch data from the table in a streaming manner : "user_team" */
  userTeamStream: Array<UserTeam>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table in a streaming manner : "auth.users" */
  usersStream: Array<Users>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProviderRequestsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_StreamCursorInput>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthProvidersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_StreamCursorInput>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRefreshTokensStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_StreamCursorInput>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthRolesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_StreamCursorInput>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserAuthenticatorsArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type Subscription_RootAuthUserAuthenticatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type Subscription_RootAuthUserAuthenticatorsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserAuthenticators_StreamCursorInput>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserProvidersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_StreamCursorInput>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootAuthUserRolesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_StreamCursorInput>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinctOn?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinctOn?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type Subscription_RootBucketsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_StreamCursorInput>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type Subscription_RootClassificationsArgs = {
  distinctOn?: InputMaybe<Array<ClassificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClassificationsOrderBy>>;
  where?: InputMaybe<ClassificationsBoolExp>;
};


export type Subscription_RootClassificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ClassificationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ClassificationsOrderBy>>;
  where?: InputMaybe<ClassificationsBoolExp>;
};


export type Subscription_RootClassificationsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootClassificationsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Classifications_StreamCursorInput>>;
  where?: InputMaybe<ClassificationsBoolExp>;
};


export type Subscription_RootConditionFieldTypeArgs = {
  distinctOn?: InputMaybe<Array<ConditionFieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionFieldTypeOrderBy>>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};


export type Subscription_RootConditionFieldTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConditionFieldTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionFieldTypeOrderBy>>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};


export type Subscription_RootConditionFieldTypeByPkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootConditionFieldTypeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Condition_Field_Type_StreamCursorInput>>;
  where?: InputMaybe<ConditionFieldTypeBoolExp>;
};


export type Subscription_RootConditionOperatorTypeArgs = {
  distinctOn?: InputMaybe<Array<ConditionOperatorTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionOperatorTypeOrderBy>>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};


export type Subscription_RootConditionOperatorTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConditionOperatorTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConditionOperatorTypeOrderBy>>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};


export type Subscription_RootConditionOperatorTypeByPkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootConditionOperatorTypeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Condition_Operator_Type_StreamCursorInput>>;
  where?: InputMaybe<ConditionOperatorTypeBoolExp>;
};


export type Subscription_RootEntitiesArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type Subscription_RootEntitiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntitiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntitiesOrderBy>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type Subscription_RootEntitiesByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEntitiesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Entities_StreamCursorInput>>;
  where?: InputMaybe<EntitiesBoolExp>;
};


export type Subscription_RootEntityClassificationArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


export type Subscription_RootEntityClassificationAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityClassificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityClassificationOrderBy>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


export type Subscription_RootEntityClassificationByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEntityClassificationStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Classification_StreamCursorInput>>;
  where?: InputMaybe<EntityClassificationBoolExp>;
};


export type Subscription_RootEntityTypeArgs = {
  distinctOn?: InputMaybe<Array<EntityTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityTypeOrderBy>>;
  where?: InputMaybe<EntityTypeBoolExp>;
};


export type Subscription_RootEntityTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<EntityTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EntityTypeOrderBy>>;
  where?: InputMaybe<EntityTypeBoolExp>;
};


export type Subscription_RootEntityTypeByPkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootEntityTypeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Entity_Type_StreamCursorInput>>;
  where?: InputMaybe<EntityTypeBoolExp>;
};


export type Subscription_RootEventFileArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


export type Subscription_RootEventFileAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventFileSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventFileOrderBy>>;
  where?: InputMaybe<EventFileBoolExp>;
};


export type Subscription_RootEventFileByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventFileStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Event_File_StreamCursorInput>>;
  where?: InputMaybe<EventFileBoolExp>;
};


export type Subscription_RootEventNetworkArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


export type Subscription_RootEventNetworkAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventNetworkSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventNetworkOrderBy>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


export type Subscription_RootEventNetworkByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventNetworkStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Event_Network_StreamCursorInput>>;
  where?: InputMaybe<EventNetworkBoolExp>;
};


export type Subscription_RootEventWindowsArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


export type Subscription_RootEventWindowsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventWindowsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventWindowsOrderBy>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


export type Subscription_RootEventWindowsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventWindowsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Event_Windows_StreamCursorInput>>;
  where?: InputMaybe<EventWindowsBoolExp>;
};


export type Subscription_RootEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type Subscription_RootEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type Subscription_RootEventsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Events_StreamCursorInput>>;
  where?: InputMaybe<EventsBoolExp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type Subscription_RootFilesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Files_StreamCursorInput>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type Subscription_RootNetworksArgs = {
  distinctOn?: InputMaybe<Array<NetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NetworksOrderBy>>;
  where?: InputMaybe<NetworksBoolExp>;
};


export type Subscription_RootNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<NetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NetworksOrderBy>>;
  where?: InputMaybe<NetworksBoolExp>;
};


export type Subscription_RootNetworksByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNetworksStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Networks_StreamCursorInput>>;
  where?: InputMaybe<NetworksBoolExp>;
};


export type Subscription_RootOrganizationDepartmentsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


export type Subscription_RootOrganizationDepartmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationDepartmentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationDepartmentsOrderBy>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


export type Subscription_RootOrganizationDepartmentsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationDepartmentsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_Departments_StreamCursorInput>>;
  where?: InputMaybe<OrganizationDepartmentsBoolExp>;
};


export type Subscription_RootOrganizationProjectArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


export type Subscription_RootOrganizationProjectAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationProjectSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationProjectOrderBy>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


export type Subscription_RootOrganizationProjectByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationProjectStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_Project_StreamCursorInput>>;
  where?: InputMaybe<OrganizationProjectBoolExp>;
};


export type Subscription_RootOrganizationUserArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


export type Subscription_RootOrganizationUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


export type Subscription_RootOrganizationUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationUserStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_User_StreamCursorInput>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type Subscription_RootOrganizationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type Subscription_RootOrganizationsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_StreamCursorInput>>;
  where?: InputMaybe<OrganizationsBoolExp>;
};


export type Subscription_RootOrganizationsTeamArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


export type Subscription_RootOrganizationsTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationsTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsTeamOrderBy>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


export type Subscription_RootOrganizationsTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationsTeamStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_Team_StreamCursorInput>>;
  where?: InputMaybe<OrganizationsTeamBoolExp>;
};


export type Subscription_RootProcessesArgs = {
  distinctOn?: InputMaybe<Array<ProcessesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProcessesOrderBy>>;
  where?: InputMaybe<ProcessesBoolExp>;
};


export type Subscription_RootProcessesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProcessesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProcessesOrderBy>>;
  where?: InputMaybe<ProcessesBoolExp>;
};


export type Subscription_RootProcessesByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProcessesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Processes_StreamCursorInput>>;
  where?: InputMaybe<ProcessesBoolExp>;
};


export type Subscription_RootProjectTeamArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


export type Subscription_RootProjectTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectTeamOrderBy>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


export type Subscription_RootProjectTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectTeamStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Project_Team_StreamCursorInput>>;
  where?: InputMaybe<ProjectTeamBoolExp>;
};


export type Subscription_RootProjectUserArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


export type Subscription_RootProjectUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


export type Subscription_RootProjectUserByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectUserStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Project_User_StreamCursorInput>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


export type Subscription_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Projects_StreamCursorInput>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootRuleConditionsArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


export type Subscription_RootRuleConditionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleConditionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleConditionsOrderBy>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


export type Subscription_RootRuleConditionsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleConditionsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Conditions_StreamCursorInput>>;
  where?: InputMaybe<RuleConditionsBoolExp>;
};


export type Subscription_RootRuleDisposableArgs = {
  distinctOn?: InputMaybe<Array<RuleDisposableSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleDisposableOrderBy>>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};


export type Subscription_RootRuleDisposableAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleDisposableSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleDisposableOrderBy>>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};


export type Subscription_RootRuleDisposableByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleDisposableStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Disposable_StreamCursorInput>>;
  where?: InputMaybe<RuleDisposableBoolExp>;
};


export type Subscription_RootRuleEmailArgs = {
  distinctOn?: InputMaybe<Array<RuleEmailSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleEmailOrderBy>>;
  where?: InputMaybe<RuleEmailBoolExp>;
};


export type Subscription_RootRuleEmailAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleEmailSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleEmailOrderBy>>;
  where?: InputMaybe<RuleEmailBoolExp>;
};


export type Subscription_RootRuleEmailByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleEmailStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Email_StreamCursorInput>>;
  where?: InputMaybe<RuleEmailBoolExp>;
};


export type Subscription_RootRulePopupArgs = {
  distinctOn?: InputMaybe<Array<RulePopupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulePopupOrderBy>>;
  where?: InputMaybe<RulePopupBoolExp>;
};


export type Subscription_RootRulePopupAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulePopupSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulePopupOrderBy>>;
  where?: InputMaybe<RulePopupBoolExp>;
};


export type Subscription_RootRulePopupByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRulePopupStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Popup_StreamCursorInput>>;
  where?: InputMaybe<RulePopupBoolExp>;
};


export type Subscription_RootRuleScreenshotArgs = {
  distinctOn?: InputMaybe<Array<RuleScreenshotSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleScreenshotOrderBy>>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};


export type Subscription_RootRuleScreenshotAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleScreenshotSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleScreenshotOrderBy>>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};


export type Subscription_RootRuleScreenshotByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleScreenshotStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Screenshot_StreamCursorInput>>;
  where?: InputMaybe<RuleScreenshotBoolExp>;
};


export type Subscription_RootRuleTeamArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


export type Subscription_RootRuleTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleTeamOrderBy>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


export type Subscription_RootRuleTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleTeamStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Team_StreamCursorInput>>;
  where?: InputMaybe<RuleTeamBoolExp>;
};


export type Subscription_RootRuleWebhookArgs = {
  distinctOn?: InputMaybe<Array<RuleWebhookSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWebhookOrderBy>>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};


export type Subscription_RootRuleWebhookAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleWebhookSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWebhookOrderBy>>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};


export type Subscription_RootRuleWebhookByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleWebhookStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Webhook_StreamCursorInput>>;
  where?: InputMaybe<RuleWebhookBoolExp>;
};


export type Subscription_RootRuleWeightArgs = {
  distinctOn?: InputMaybe<Array<RuleWeightSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWeightOrderBy>>;
  where?: InputMaybe<RuleWeightBoolExp>;
};


export type Subscription_RootRuleWeightAggregateArgs = {
  distinctOn?: InputMaybe<Array<RuleWeightSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RuleWeightOrderBy>>;
  where?: InputMaybe<RuleWeightBoolExp>;
};


export type Subscription_RootRuleWeightByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRuleWeightStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rule_Weight_StreamCursorInput>>;
  where?: InputMaybe<RuleWeightBoolExp>;
};


export type Subscription_RootRulesArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


export type Subscription_RootRulesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RulesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RulesOrderBy>>;
  where?: InputMaybe<RulesBoolExp>;
};


export type Subscription_RootRulesByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRulesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Rules_StreamCursorInput>>;
  where?: InputMaybe<RulesBoolExp>;
};


export type Subscription_RootTagsArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Subscription_RootTagsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Subscription_RootTagsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTagsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Tags_StreamCursorInput>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Subscription_RootTeamTeamArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


export type Subscription_RootTeamTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamTeamOrderBy>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


export type Subscription_RootTeamTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeamTeamStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Team_Team_StreamCursorInput>>;
  where?: InputMaybe<TeamTeamBoolExp>;
};


export type Subscription_RootTeamsArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeamsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamsOrderBy>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootTeamsByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeamsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Teams_StreamCursorInput>>;
  where?: InputMaybe<TeamsBoolExp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserNetworksArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


export type Subscription_RootUserNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


export type Subscription_RootUserNetworksByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserNetworksStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<User_Networks_StreamCursorInput>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


export type Subscription_RootUserOrganizationArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


export type Subscription_RootUserOrganizationAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserOrganizationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrganizationOrderBy>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


export type Subscription_RootUserOrganizationByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserOrganizationStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<User_Organization_StreamCursorInput>>;
  where?: InputMaybe<UserOrganizationBoolExp>;
};


export type Subscription_RootUserTeamArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


export type Subscription_RootUserTeamAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


export type Subscription_RootUserTeamByPkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserTeamStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<User_Team_StreamCursorInput>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Users_StreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Streaming cursor of the table "tags" */
export type Tags_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Tags_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_StreamCursorValueInput = {
  defaultValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValueRequired?: InputMaybe<Scalars['Boolean']>;
  namespace?: InputMaybe<Scalars['String']>;
  predicate?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "team_team" */
export type Team_Team_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  parentTeamId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "team_team" */
export type Team_Team_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  parentTeamId?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "team_team" */
export type Team_Team_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Team_Team_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Team_Team_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  parentTeamId?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "teams" */
export type Teams_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Teams_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Teams_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  iconData?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_networks" */
export type User_Networks_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "user_networks" */
export type User_Networks_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_networks" */
export type User_Networks_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_Networks_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Networks_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  networkId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_organization" */
export type User_Organization_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "user_organization" */
export type User_Organization_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  organizationId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_organization" */
export type User_Organization_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_Organization_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Organization_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_team" */
export type User_Team_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "user_team" */
export type User_Team_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  teamId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_team" */
export type User_Team_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_Team_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Team_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  teamId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  authenticators: Array<AuthUserAuthenticators>;
  /** An aggregate relationship */
  authenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  /** A computed field, executes function "auth.user_current_project" */
  currentProject?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  eventsAggregate: EventsAggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  /** An array relationship */
  organizationUsers: Array<OrganizationUser>;
  /** An aggregate relationship */
  organizationUsersAggregate: OrganizationUserAggregate;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  projectUsers: Array<ProjectUser>;
  /** An aggregate relationship */
  projectUsersAggregate: ProjectUserAggregate;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokensAggregate: AuthRefreshTokensAggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  rolesAggregate: AuthUserRolesAggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userNetworks: Array<UserNetworks>;
  /** An aggregate relationship */
  userNetworksAggregate: UserNetworksAggregate;
  /** An object relationship */
  userOrganization?: Maybe<UserOrganization>;
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProvidersAggregate: AuthUserProvidersAggregate;
  /** An array relationship */
  userTeams: Array<UserTeam>;
  /** An aggregate relationship */
  userTeamsAggregate: UserTeamAggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersEventsArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
  where?: InputMaybe<EventsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersOrganizationUsersArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersOrganizationUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<OrganizationUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationUserOrderBy>>;
  where?: InputMaybe<OrganizationUserBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersProjectUsersArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersProjectUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectUserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProjectUserOrderBy>>;
  where?: InputMaybe<ProjectUserBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserNetworksArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserNetworksAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserNetworksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserNetworksOrderBy>>;
  where?: InputMaybe<UserNetworksBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserTeamsArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserTeamsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserTeamSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserTeamOrderBy>>;
  where?: InputMaybe<UserTeamBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  __typename?: 'usersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  __typename?: 'usersAggregateFields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  activeMfaType?: InputMaybe<StringComparisonExp>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currentChallenge?: InputMaybe<StringComparisonExp>;
  currentProject?: InputMaybe<StringComparisonExp>;
  defaultRole?: InputMaybe<StringComparisonExp>;
  defaultRoleByRole?: InputMaybe<AuthRolesBoolExp>;
  disabled?: InputMaybe<BooleanComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  events?: InputMaybe<EventsBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAnonymous?: InputMaybe<BooleanComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  locale?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  newEmail?: InputMaybe<CitextComparisonExp>;
  organizationUsers?: InputMaybe<OrganizationUserBoolExp>;
  otpHash?: InputMaybe<StringComparisonExp>;
  otpHashExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: InputMaybe<StringComparisonExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  phoneNumber?: InputMaybe<StringComparisonExp>;
  phoneNumberVerified?: InputMaybe<BooleanComparisonExp>;
  projectUsers?: InputMaybe<ProjectUserBoolExp>;
  refreshTokens?: InputMaybe<AuthRefreshTokensBoolExp>;
  roles?: InputMaybe<AuthUserRolesBoolExp>;
  ticket?: InputMaybe<StringComparisonExp>;
  ticketExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  totpSecret?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userNetworks?: InputMaybe<UserNetworksBoolExp>;
  userOrganization?: InputMaybe<UserOrganizationBoolExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
  userTeams?: InputMaybe<UserTeamBoolExp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsArrRelInsertInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  events?: InputMaybe<EventsArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  organizationUsers?: InputMaybe<OrganizationUserArrRelInsertInput>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  projectUsers?: InputMaybe<ProjectUserArrRelInsertInput>;
  refreshTokens?: InputMaybe<AuthRefreshTokensArrRelInsertInput>;
  roles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userNetworks?: InputMaybe<UserNetworksArrRelInsertInput>;
  userOrganization?: InputMaybe<UserOrganizationObjRelInsertInput>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
  userTeams?: InputMaybe<UserTeamArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'usersMaxFields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'usersMinFields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  __typename?: 'usersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  authenticatorsAggregate?: InputMaybe<AuthUserAuthenticatorsAggregateOrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  currentProject?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  defaultRoleByRole?: InputMaybe<AuthRolesOrderBy>;
  disabled?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  eventsAggregate?: InputMaybe<EventsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  isAnonymous?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  organizationUsersAggregate?: InputMaybe<OrganizationUserAggregateOrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  phoneNumberVerified?: InputMaybe<OrderBy>;
  projectUsersAggregate?: InputMaybe<ProjectUserAggregateOrderBy>;
  refreshTokensAggregate?: InputMaybe<AuthRefreshTokensAggregateOrderBy>;
  rolesAggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userNetworksAggregate?: InputMaybe<UserNetworksAggregateOrderBy>;
  userOrganization?: InputMaybe<UserOrganizationOrderBy>;
  userProvidersAggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
  userTeamsAggregate?: InputMaybe<UserTeamAggregateOrderBy>;
};

/** primary key columns input for table: auth.users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type UsersSetInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UsersUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<UsersAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<UsersPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "users" */
export type Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_StreamCursorValueInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type InsertProviderRequestMutationVariables = Exact<{
  providerRequest: AuthProviderRequestsInsertInput;
}>;


export type InsertProviderRequestMutation = { __typename?: 'mutation_root', insertAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type DeleteProviderRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProviderRequestMutation = { __typename?: 'mutation_root', deleteAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type ProviderRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProviderRequestQuery = { __typename?: 'query_root', authProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type InsertRefreshTokenMutationVariables = Exact<{
  refreshToken: AuthRefreshTokensInsertInput;
}>;


export type InsertRefreshTokenMutation = { __typename?: 'mutation_root', insertAuthRefreshToken?: { __typename?: 'authRefreshTokens', refreshToken: any } | null };

export type DeleteRefreshTokenMutationVariables = Exact<{
  refreshToken: Scalars['uuid'];
}>;


export type DeleteRefreshTokenMutation = { __typename?: 'mutation_root', deleteAuthRefreshToken?: { __typename?: 'authRefreshTokens', refreshToken: any, expiresAt: any } | null };

export type DeleteUserRefreshTokensMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokensMutationResponse', affected_rows: number } | null };

export type DeleteExpiredRefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteExpiredRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokensMutationResponse', affected_rows: number } | null };

export type GetUserAuthenticatorsQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserAuthenticatorsQuery = { __typename?: 'query_root', authUserAuthenticators: Array<{ __typename?: 'authUserAuthenticators', counter: any, credentialId: string, credentialPublicKey?: any | null, transports: string, id: any, user: { __typename?: 'users', id: any } }> };

export type GetUserChallengeQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserChallengeQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, currentChallenge?: string | null } | null };

export type UpdateUserChallengeMutationVariables = Exact<{
  userId: Scalars['uuid'];
  challenge: Scalars['String'];
}>;


export type UpdateUserChallengeMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type AddUserAuthenticatorMutationVariables = Exact<{
  userAuthenticator: AuthUserAuthenticatorsInsertInput;
}>;


export type AddUserAuthenticatorMutation = { __typename?: 'mutation_root', insertAuthUserAuthenticator?: { __typename?: 'authUserAuthenticators', id: any } | null };

export type UpdateUserAuthenticatorMutationVariables = Exact<{
  id: Scalars['uuid'];
  counter: Scalars['bigint'];
}>;


export type UpdateUserAuthenticatorMutation = { __typename?: 'mutation_root', updateAuthUserAuthenticator?: { __typename?: 'authUserAuthenticators', id: any } | null };

export type AuthUserProvidersQueryVariables = Exact<{
  provider: Scalars['String'];
  providerUserId: Scalars['String'];
}>;


export type AuthUserProvidersQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, user: { __typename?: 'users', id: any } }> };

export type UserProviderQueryVariables = Exact<{
  userId: Scalars['uuid'];
  providerId: Scalars['String'];
}>;


export type UserProviderQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, refreshToken?: string | null }> };

export type UpdateAuthUserproviderMutationVariables = Exact<{
  id: Scalars['uuid'];
  authUserProvider: AuthUserProvidersSetInput;
}>;


export type UpdateAuthUserproviderMutation = { __typename?: 'mutation_root', updateAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type MyMutation2MutationVariables = Exact<{ [key: string]: never; }>;


export type MyMutation2Mutation = { __typename: 'mutation_root' };

export type InsertUserRolesMutationVariables = Exact<{
  userRoles: Array<AuthUserRolesInsertInput> | AuthUserRolesInsertInput;
}>;


export type InsertUserRolesMutation = { __typename?: 'mutation_root', insertAuthUserRoles?: { __typename?: 'authUserRolesMutationResponse', affected_rows: number } | null };

export type DeleteUserRolesByUserIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRolesByUserIdMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRolesMutationResponse', affected_rows: number } | null };

export type UserFieldsFragment = { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UsersQueryVariables = Exact<{
  where: UsersBoolExp;
}>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables = Exact<{
  refreshToken: Scalars['uuid'];
  expiresAt: Scalars['timestamptz'];
}>;


export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation = { __typename?: 'mutation_root', updateAuthRefreshTokens?: { __typename?: 'authRefreshTokensMutationResponse', returning: Array<{ __typename?: 'authRefreshTokens', refreshToken: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> } | null };

export type GetUsersByRefreshTokenOldQueryVariables = Exact<{
  refreshToken: Scalars['uuid'];
}>;


export type GetUsersByRefreshTokenOldQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', refreshToken: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user: UsersSetInput;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UpdateUserWhereMutationVariables = Exact<{
  where: UsersBoolExp;
  user: UsersSetInput;
}>;


export type UpdateUserWhereMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'usersMutationResponse', affected_rows: number } | null };

export type RotateUsersTicketMutationVariables = Exact<{
  oldTicket: Scalars['String'];
  newTicket: Scalars['String'];
  newTicketExpiresAt: Scalars['timestamptz'];
}>;


export type RotateUsersTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'usersMutationResponse', affected_rows: number } | null };

export type ChangeEmailsByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  email: Scalars['citext'];
  newTicket: Scalars['String'];
  now: Scalars['timestamptz'];
}>;


export type ChangeEmailsByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'usersMutationResponse', returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export type InsertUserMutationVariables = Exact<{
  user: UsersInsertInput;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insertUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRolesMutationResponse', affected_rows: number } | null, deleteUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeanonymizeUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  avatarUrl?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type DeanonymizeUserMutation = { __typename?: 'mutation_root', updateAuthUserRoles?: { __typename?: 'authUserRolesMutationResponse', affected_rows: number } | null, updateUser?: { __typename?: 'users', id: any } | null };

export type InsertUserProviderToUserMutationVariables = Exact<{
  userProvider: AuthUserProvidersInsertInput;
}>;


export type InsertUserProviderToUserMutation = { __typename?: 'mutation_root', insertAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type GetUserByTicketQueryVariables = Exact<{
  ticket: Scalars['String'];
}>;


export type GetUserByTicketQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type UpdateUsersByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  user: UsersSetInput;
}>;


export type UpdateUsersByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'usersMutationResponse', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export const UserFieldsFragmentDoc = gql`
    fragment userFields on users {
  id
  createdAt
  disabled
  displayName
  avatarUrl
  email
  passwordHash
  emailVerified
  phoneNumber
  phoneNumberVerified
  defaultRole
  isAnonymous
  ticket
  otpHash
  totpSecret
  activeMfaType
  newEmail
  locale
  metadata
  roles {
    role
  }
}
    `;
export const InsertProviderRequestDocument = gql`
    mutation insertProviderRequest($providerRequest: authProviderRequestsInsertInput!) {
  insertAuthProviderRequest(object: $providerRequest) {
    id
    options
  }
}
    `;
export const DeleteProviderRequestDocument = gql`
    mutation deleteProviderRequest($id: uuid!) {
  deleteAuthProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const ProviderRequestDocument = gql`
    query providerRequest($id: uuid!) {
  authProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const InsertRefreshTokenDocument = gql`
    mutation insertRefreshToken($refreshToken: authRefreshTokensInsertInput!) {
  insertAuthRefreshToken(object: $refreshToken) {
    refreshToken
  }
}
    `;
export const DeleteRefreshTokenDocument = gql`
    mutation deleteRefreshToken($refreshToken: uuid!) {
  deleteAuthRefreshToken(refreshToken: $refreshToken) {
    refreshToken
    expiresAt
  }
}
    `;
export const DeleteUserRefreshTokensDocument = gql`
    mutation deleteUserRefreshTokens($userId: uuid!) {
  deleteAuthRefreshTokens(where: {user: {id: {_eq: $userId}}}) {
    affected_rows
  }
}
    `;
export const DeleteExpiredRefreshTokensDocument = gql`
    mutation deleteExpiredRefreshTokens {
  deleteAuthRefreshTokens(where: {expiresAt: {_lt: now}}) {
    affected_rows
  }
}
    `;
export const GetUserAuthenticatorsDocument = gql`
    query getUserAuthenticators($id: uuid!) {
  authUserAuthenticators(where: {userId: {_eq: $id}}) {
    counter
    credentialId
    credentialPublicKey
    transports
    id
    user {
      id
    }
  }
}
    `;
export const GetUserChallengeDocument = gql`
    query getUserChallenge($id: uuid!) {
  user(id: $id) {
    id
    currentChallenge
  }
}
    `;
export const UpdateUserChallengeDocument = gql`
    mutation updateUserChallenge($userId: uuid!, $challenge: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {currentChallenge: $challenge}) {
    id
  }
}
    `;
export const AddUserAuthenticatorDocument = gql`
    mutation addUserAuthenticator($userAuthenticator: authUserAuthenticatorsInsertInput!) {
  insertAuthUserAuthenticator(object: $userAuthenticator) {
    id
  }
}
    `;
export const UpdateUserAuthenticatorDocument = gql`
    mutation updateUserAuthenticator($id: uuid!, $counter: bigint!) {
  updateAuthUserAuthenticator(pk_columns: {id: $id}, _set: {counter: $counter}) {
    id
  }
}
    `;
export const AuthUserProvidersDocument = gql`
    query authUserProviders($provider: String!, $providerUserId: String!) {
  authUserProviders(
    where: {_and: {provider: {id: {_eq: $provider}}, providerUserId: {_eq: $providerUserId}}}
    limit: 1
  ) {
    id
    user {
      id
    }
  }
}
    `;
export const UserProviderDocument = gql`
    query userProvider($userId: uuid!, $providerId: String!) {
  authUserProviders(
    where: {_and: [{userId: {_eq: $userId}}, {providerId: {_eq: $providerId}}]}
    limit: 1
  ) {
    id
    refreshToken
  }
}
    `;
export const UpdateAuthUserproviderDocument = gql`
    mutation updateAuthUserprovider($id: uuid!, $authUserProvider: authUserProvidersSetInput!) {
  updateAuthUserProvider(pk_columns: {id: $id}, _set: $authUserProvider) {
    id
  }
}
    `;
export const MyMutation2Document = gql`
    mutation MyMutation2 {
  __typename
}
    `;
export const InsertUserRolesDocument = gql`
    mutation insertUserRoles($userRoles: [authUserRolesInsertInput!]!) {
  insertAuthUserRoles(objects: $userRoles) {
    affected_rows
  }
}
    `;
export const DeleteUserRolesByUserIdDocument = gql`
    mutation deleteUserRolesByUserId($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export const UserDocument = gql`
    query user($id: uuid!) {
  user(id: $id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UsersDocument = gql`
    query users($where: usersBoolExp!) {
  users(where: $where) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument = gql`
    mutation getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt($refreshToken: uuid!, $expiresAt: timestamptz!) {
  updateAuthRefreshTokens(
    _set: {expiresAt: $expiresAt}
    where: {_and: [{refreshToken: {_eq: $refreshToken}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    returning {
      refreshToken
      user {
        ...userFields
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenOldDocument = gql`
    query getUsersByRefreshTokenOld($refreshToken: uuid!) {
  authRefreshTokens(
    where: {_and: [{refreshToken: {_eq: $refreshToken}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    refreshToken
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($id: uuid!, $user: usersSetInput!) {
  updateUser(pk_columns: {id: $id}, _set: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserWhereDocument = gql`
    mutation updateUserWhere($where: usersBoolExp!, $user: usersSetInput!) {
  updateUsers(where: $where, _set: $user) {
    affected_rows
  }
}
    `;
export const RotateUsersTicketDocument = gql`
    mutation rotateUsersTicket($oldTicket: String!, $newTicket: String!, $newTicketExpiresAt: timestamptz!) {
  updateUsers(
    _set: {ticket: $newTicket, ticketExpiresAt: $newTicketExpiresAt}
    where: {ticket: {_eq: $oldTicket}}
  ) {
    affected_rows
  }
}
    `;
export const ChangeEmailsByTicketDocument = gql`
    mutation changeEmailsByTicket($ticket: String!, $email: citext!, $newTicket: String!, $now: timestamptz!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: $now}}]}
    _set: {email: $email, newEmail: null, ticket: $newTicket, ticketExpiresAt: $now}
  ) {
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const InsertUserDocument = gql`
    mutation insertUser($user: usersInsertInput!) {
  insertUser(object: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
  deleteUser(id: $userId) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeanonymizeUserDocument = gql`
    mutation deanonymizeUser($userId: uuid!, $avatarUrl: String, $role: String!) {
  updateAuthUserRoles(where: {user: {id: {_eq: $userId}}}, _set: {role: $role}) {
    affected_rows
  }
  updateUser(
    pk_columns: {id: $userId}
    _set: {avatarUrl: $avatarUrl, defaultRole: $role}
  ) {
    id
  }
}
    `;
export const InsertUserProviderToUserDocument = gql`
    mutation insertUserProviderToUser($userProvider: authUserProvidersInsertInput!) {
  insertAuthUserProvider(object: $userProvider) {
    id
  }
}
    `;
export const GetUserByTicketDocument = gql`
    query getUserByTicket($ticket: String!) {
  users(where: {ticket: {_eq: $ticket}}) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUsersByTicketDocument = gql`
    mutation updateUsersByTicket($ticket: String!, $user: usersSetInput!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: now}}]}
    _set: $user
  ) {
    affected_rows
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertProviderRequest(variables: InsertProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProviderRequestMutation>(InsertProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProviderRequest', 'mutation');
    },
    deleteProviderRequest(variables: DeleteProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProviderRequestMutation>(DeleteProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProviderRequest', 'mutation');
    },
    providerRequest(variables: ProviderRequestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProviderRequestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProviderRequestQuery>(ProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'providerRequest', 'query');
    },
    insertRefreshToken(variables: InsertRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertRefreshTokenMutation>(InsertRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertRefreshToken', 'mutation');
    },
    deleteRefreshToken(variables: DeleteRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRefreshTokenMutation>(DeleteRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRefreshToken', 'mutation');
    },
    deleteUserRefreshTokens(variables: DeleteUserRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRefreshTokensMutation>(DeleteUserRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRefreshTokens', 'mutation');
    },
    deleteExpiredRefreshTokens(variables?: DeleteExpiredRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteExpiredRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteExpiredRefreshTokensMutation>(DeleteExpiredRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteExpiredRefreshTokens', 'mutation');
    },
    getUserAuthenticators(variables: GetUserAuthenticatorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserAuthenticatorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserAuthenticatorsQuery>(GetUserAuthenticatorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserAuthenticators', 'query');
    },
    getUserChallenge(variables: GetUserChallengeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserChallengeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserChallengeQuery>(GetUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserChallenge', 'query');
    },
    updateUserChallenge(variables: UpdateUserChallengeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserChallengeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserChallengeMutation>(UpdateUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserChallenge', 'mutation');
    },
    addUserAuthenticator(variables: AddUserAuthenticatorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserAuthenticatorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserAuthenticatorMutation>(AddUserAuthenticatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUserAuthenticator', 'mutation');
    },
    updateUserAuthenticator(variables: UpdateUserAuthenticatorMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserAuthenticatorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserAuthenticatorMutation>(UpdateUserAuthenticatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserAuthenticator', 'mutation');
    },
    authUserProviders(variables: AuthUserProvidersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthUserProvidersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthUserProvidersQuery>(AuthUserProvidersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authUserProviders', 'query');
    },
    userProvider(variables: UserProviderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProviderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProviderQuery>(UserProviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProvider', 'query');
    },
    updateAuthUserprovider(variables: UpdateAuthUserproviderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAuthUserproviderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAuthUserproviderMutation>(UpdateAuthUserproviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAuthUserprovider', 'mutation');
    },
    MyMutation2(variables?: MyMutation2MutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MyMutation2Mutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyMutation2Mutation>(MyMutation2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MyMutation2', 'mutation');
    },
    insertUserRoles(variables: InsertUserRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserRolesMutation>(InsertUserRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserRoles', 'mutation');
    },
    deleteUserRolesByUserId(variables: DeleteUserRolesByUserIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRolesByUserIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRolesByUserIdMutation>(DeleteUserRolesByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRolesByUserId', 'mutation');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    users(variables: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt(variables: GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation>(GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt', 'mutation');
    },
    getUsersByRefreshTokenOld(variables: GetUsersByRefreshTokenOldQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenOldQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenOldQuery>(GetUsersByRefreshTokenOldDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenOld', 'query');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserWhere(variables: UpdateUserWhereMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserWhereMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserWhereMutation>(UpdateUserWhereDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserWhere', 'mutation');
    },
    rotateUsersTicket(variables: RotateUsersTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RotateUsersTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RotateUsersTicketMutation>(RotateUsersTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'rotateUsersTicket', 'mutation');
    },
    changeEmailsByTicket(variables: ChangeEmailsByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeEmailsByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeEmailsByTicketMutation>(ChangeEmailsByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeEmailsByTicket', 'mutation');
    },
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUser', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deanonymizeUser(variables: DeanonymizeUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeanonymizeUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeanonymizeUserMutation>(DeanonymizeUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deanonymizeUser', 'mutation');
    },
    insertUserProviderToUser(variables: InsertUserProviderToUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserProviderToUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserProviderToUserMutation>(InsertUserProviderToUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserProviderToUser', 'mutation');
    },
    getUserByTicket(variables: GetUserByTicketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByTicketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByTicketQuery>(GetUserByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByTicket', 'query');
    },
    updateUsersByTicket(variables: UpdateUsersByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUsersByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUsersByTicketMutation>(UpdateUsersByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUsersByTicket', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;