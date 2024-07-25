## NoSQL이란?
- NoSQL 은 비관계형 데이터베이스를 의미
- 관계형 데이터 모델을 지양하며 대량의 분산된 데이터를 저장하고 조회하는데 특화되어있으며, 스키마 없이 사용 가능하거나 느슨한 스키마를 제공
- 기존의 관계형 DBMS 가 갖고 있는 특성뿐만 아니라 다른 특성들을 부가적으로 지원

## NoSQL 특징
- NoSQL은 RDBMS와는 달리 데이터 간의 관계를 정의하지 않는다
- RDBMS에 비해 훨씬 더 대용량의 데이터를 저장할 수 있다
- 분산형 구조
- 고정되지 않은 테이블 스키마

## NoSQL 장단점
### 장점
- RDBMS에 비해 저렴한 비용으로 분산처리와 병렬 처리 가능
- 가변적인 구조로 데이터 저장이 가능
- 데이터 모델의 유연한 변화가 가능
- NoSQL은 읽기와 쓰기라는 기본적인 기능에 충실. 특히 대용량 데이터의 읽기와 쓰기에 강점.

### 단점
- 데이터 업데이트 중 장애가 발생하면 데이터 손실이 발생할 수 있다.
- 많은 인덱스를 사용하려면 충분한 메모리가 필요하다.(인덱스 구조가 메모리에 저장)
- 데이터 일관성이 항상 보장되지 않는다.(ACID 트랜잭션을 지원하지 않는다.)
- 보편적인 SQL 문법을 활용하기 힘든 DB가 많다. 이에 따른 Learning Curve가 있을 수 있다.

## 데이터 모델
### Key-Value
- 키와 값으로 이루어진, 저장과 조회라는 가장 간단한 원칙에 충실한 데이터베이스.
- Key와 Value의 쌍으로 데이터가 저장되는 가장 단순한 형태의 솔루션으로 Amazon의 Dynamo Paper에서 유래. Riak, Vodemort, Tokyo 등의 제품

### Document
- Lotus Notes에서 유래되었으며, JSON, XML과 같은 Collection 데이터 모델 구조를 채택. MongoDB, CoughDB가 이 종류에 해당.
- Document 또는 Document-Oriented는 위의 Key-value Database와 같이 데이터 저장에 Key-Value Type를 사용.

### Column-Family or Wide-Column
- 컬럼 패밀리 데이터베이스는 대용량 데이터, 읽기와 쓰기 성능, 고가용성을 위해 설계
- Big Table DB라고도 하며, Google의 BigTable Paper에서 유래. Key Value 에서 발전된 형태의 Column Family 데이터 모델을 사용하고 있고, HBase, Cassandra, ScyllaDB 등이 이에 해당.

### Graph
- Euler & Graph Theory에서 유래. Nodes, Relationship, Key-Value 데이터 모델을 채용하고 있다. Neo4J, OreientDB 등의 제품이 있다.
