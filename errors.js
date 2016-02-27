'use strict'

module.exports = [
  null // 0 is not an error
, { name: 'OffsetOutOfRange'
  , code: 1
  , retriable: false
  , message: 'Requested offset is outside range for topic/partition'
  }
, { name: 'InvalidMessage'
  , code: 2
  , retriable: true
  , message: 'Message contents do not match CRC'
  }
, { name: 'UnknownTopicOrPartition'
  , code: 3
  , retriable: true
  , message: 'Topic or partition does not exist on this broker'
  }
, { name: 'InvalidMessageSize'
  , code: 4
  , retriable: false
  , message: 'Message has negative size'
  }
, { name: 'LeaderNotAvailable'
  , code: 5
  , retriable: true
  , message: 'Leader not available. Leadership election in progress'
  }
, { name: 'NotLeaderForPartition'
  , code: 6
  , retriable: true
  , message: 'Message sent to replica that is not the leader for partition. ' +
      'Check that metadata is not out of date.'
  }
, { name: 'RequestTimedOut'
  , code: 7
  , retriable: true
  , message: 'Request exceeded user-specified timeout'
  }
, { name: 'BrokerNotAvailable'
  , code: 8
  , retriable: false
  , message: 'Broker is not alive'
  }
, { name: 'ReplicaNotAvailable'
  , code: 9
  , retriable: false
  , message: 'Replica is expected on broker, but is not present'
  }
, { name: 'MessageSizeTooLarge'
  , code: 10
  , retriable: false
  , message: 'Message exceeds server specified maximum size'
  }
, { name: 'StaleControllerEpoch'
  , code: 11
  , retriable: false
  , message: ''
  }
, { name: 'OffsetMetadataTooLarge'
  , code: 12
  , retriable: false
  , message: 'Offset metadata string exceeds server specified maximum size'
  }
, null // there is not a code 13
, { name: 'GroupLoadInProgress'
  , code: 14
  , retriable: true
  , message: 'Still loading offsets for fetch request after leader change or' +
    'still loading group metadata'
  }
, { name: 'GroupCoordinatorNotAvailable'
  , code: 15
  , retriable: true
  , message: 'Offset topic not yet created or group coordinator not active'
  }
, { name: 'NotCoordinatorForGroup'
  , code: 16
  , retriable: true
  , message: 'Received OffsetFetch or CommitRequest for group for which ' +
      'broker is not coordinator'
  }
, { name: 'InvalidTopic'
  , code: 17
  , retriable: false
  , message: 'Topic invalid. Topic either has illegal name or is internal'
  }
, { name: 'RecordListTooLarge'
  , code: 18
  , retriable: false
  , message: 'Message batch in ProduceRequest exceeds max segment size'
  }
, { name: 'NotEnoughReplicas'
  , code: 19
  , retriable: true
  , message: 'Number of in-sync replicas is lower than configured min and ' +
      'requiredAcks is -1'
  }
, { name: 'NotEnoughReplicasAfterAppend'
  , code: 20
  , retriable: true
  , message: 'Message written to log, but fewer in-sync replicas than required'
  }
, { name: 'InvalidRequiredAcks'
  , code: 21
  , retriable: false
  , message: 'Requested requiredAcks is invalid (must be -1, 1, or 0)'
  }
, { name: 'IllegalGeneration'
  , code: 22
  , retriable: false
  , message: 'Generation id provided in request is not the current generation'
  }
, { name: 'InconsistentGroupProtocol'
  , code: 23
  , retriable: false
  , message: 'Member provided protocol type not compatible with group'
  }
, { name: 'InvalidGroupId'
  , code: 24
  , retriable: false
  , message: 'GroupId is empty or null'
  }
, { name: 'UnknownMemberId'
  , code: 25
  , retriable: false
  , message: 'MemberId not in current generation'
  }
, { name: 'InvalidSessionTimeout'
  , code: 26
  , retriable: false
  , message: 'Requested session timeout is outside allowed range on broker'
  }
, { name: 'RebalanceInProgress'
  , code: 27
  , retriable: false
  , message: 'Coordinator has begun rebalancing group. Client should rejoin.'
  }
, { name: 'InvalidCommitOffsetSize'
  , code: 28
  , retriable: false
  , message: 'OffsetCommit rejected because of oversize metadata'
  }
, { name: 'TopicAuthorizationFailed'
  , code: 29
  , retriable: false
  , message: 'Client is not authorized to access requested topic'
  }
, { name: 'GroupAuthorizationFailed'
  , code: 30
  , retriable: false
  , message: 'Client is not authorized to access particular GroupId'
  }
, { name: 'ClusterAuthorizationFailed'
  , code: 31
  , retriable: false
  , message: 'Client is not authorized to use an inter-broker or admin API'
  }
]
