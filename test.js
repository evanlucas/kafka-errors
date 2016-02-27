'use strict'

const test = require('tap').test
const errors = require('./')

test('errors', (t) => {
  function assertType(idx, name, retry) {
    const e = `'errors.get(${idx})`
    t.equal(errors.get(idx).name, name, `${e}.name' === ${name}`)
    t.equal(errors.get(idx).retriable, retry, `${e}.retriable' === ${retry}'`)
  }

  // 0
  t.equal(errors.has(0), false, 'errors.has(0) === false')

  assertType(-1, 'Unknown', false)
  assertType(1, 'OffsetOutOfRange', false)
  assertType(2, 'InvalidMessage', true)
  assertType(3, 'UnknownTopicOrPartition', true)
  assertType(4, 'InvalidMessageSize', false)
  assertType(5, 'LeaderNotAvailable', true)
  assertType(6, 'NotLeaderForPartition', true)
  assertType(7, 'RequestTimedOut', true)
  assertType(8, 'BrokerNotAvailable', false)
  assertType(9, 'ReplicaNotAvailable', false)
  assertType(10, 'MessageSizeTooLarge', false)
  assertType(11, 'StaleControllerEpoch', false)
  assertType(12, 'OffsetMetadataTooLarge', false)

  // 13
  t.equal(errors.has(13), false, 'errors.has(13) === false')

  assertType(14, 'GroupLoadInProgress', true)
  assertType(15, 'GroupCoordinatorNotAvailable', true)
  assertType(16, 'NotCoordinatorForGroup', true)
  assertType(17, 'InvalidTopic', false)
  assertType(18, 'RecordListTooLarge', false)
  assertType(19, 'NotEnoughReplicas', true)
  assertType(20, 'NotEnoughReplicasAfterAppend', true)
  assertType(21, 'InvalidRequiredAcks', false)
  assertType(22, 'IllegalGeneration', false)
  assertType(23, 'InconsistentGroupProtocol', false)
  assertType(24, 'InvalidGroupId', false)
  assertType(25, 'UnknownMemberId', false)
  assertType(26, 'InvalidSessionTimeout', false)
  assertType(27, 'RebalanceInProgress', false)
  assertType(28, 'InvalidCommitOffsetSize', false)
  assertType(29, 'TopicAuthorizationFailed', false)
  assertType(30, 'GroupAuthorizationFailed', false)
  assertType(31, 'ClusterAuthorizationFailed', false)
  t.end()
})
