testHistory={
  "latest": {
    "stackup": {
      "name": "stackup",
      "errors": "0",
      "failures": "14",
      "skipped": "0",
      "tests": "171",
      "time": "1962.707",
      "timestamp": "2024-02-28T03:02:34.071031",
      "hostname": "fv-az1536-146",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.514"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "2.003"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "2.001"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "2.104"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.997"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.111"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "2.015"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "8.787"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.030"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "7.024"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.417"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "23.177"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "23.073"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "23.162"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "65.301"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "57.353"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "2.201",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:260: in test_max_allowed_ops_unstaked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "3.128",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:285: in test_max_allowed_ops_staked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "4.611",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0x',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0xee6b2800',\n  -                maxPriorityFeePerGas='0xb2d05e00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0x',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0xee6b2800',\nE     -                maxPriorityFeePerGas='0xb2d05e00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "4.994",
          "failure": {
            "message": "Exception: expected error object, got:\nOk(result='0x136e2adfb531436339146bb3508547b0175527fa00b0320eed6fdae00b183dee', id=176)",
            "#text": "tests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AttributeError: 'Ok' object has no attribute 'code'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_bundle.py:359: in test_ban_user_sender_double_role_in_bundle\n    assert_rpc_error(\ntests/utils.py:119: in assert_rpc_error\n    raise Exception(f\"expected error object, got:\\n{response}\") from exc\nE   Exception: expected error object, got:\nE   Ok(result='0x136e2adfb531436339146bb3508547b0175527fa00b0320eed6fdae00b183dee', id=176)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "1.791",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/single/bundle/test_bundle.py:382: in test_stake_check_in_bundler\n    response = get_stake_status(paymaster_contract.address, entrypoint_contract.address)\ntests/utils.py:186: in get_stake_status\n    .result\nE   AttributeError: 'Error' object has no attribute 'result'"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.131",
          "failure": {
            "message": "assert 0 == 1\n +  where 0 = len(())",
            "#text": "tests/single/bundle/test_codehash.py:80: in test_codehash_changed\n    assert_useroperation_event(entrypoint_contract, userop, from_block=block_number)\ntests/single/bundle/test_codehash.py:12: in assert_useroperation_event\n    assert len(logs) == 1\nE   assert 0 == 1\nE    +  where 0 = len(())"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "3.051"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "3.056"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.066"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "3.001"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "2.967"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.074"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "2.974"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.150"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "2.789"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.184"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "3.043"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "2.983"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "3.997"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.003"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "4.021"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.020"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "5.039"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.030"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "5.034"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "5.048"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.124"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "4.860"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "7.098"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "7.092"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "6.044"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "4.031"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "3.989"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "4.095"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.018"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "4.011"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "4.011"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "4.014"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.015"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "4.016"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "4.069"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "3.971"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.074"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.981"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "4.065"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "3.971"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "4.079"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "3.970"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.191"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "3.913"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "5.030"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "4.981"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "5.063"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "5.069"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "5.977"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "6.084"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "5.993"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "6.078"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "5.989"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "6.159"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "5.988"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "3.876"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "4.046"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "4.982"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "11.167"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "7.009"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "7.117"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "2.936"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "2.928"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "3.110"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "2.936"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "4.053"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "3.963"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "4.078"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "4.081"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.049"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "3.974"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "3.983"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "4.084"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.040"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "2.926"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "3.058"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "3.072"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.895"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "2.992"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.092"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "3.017"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.015"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.011"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "2.985"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "2.982"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.120"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "2.997"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.035"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "1.910"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.009"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "2.017"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "2.020"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "1.983",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "2.020"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "2.014"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "2.022"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "2.019"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "2.032"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "2.028"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "3.052"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.957"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "3.066"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "2.964"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "3.093"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "4.023"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "6.068"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "5.969"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "3.097"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "2.992"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "2.960",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "3.094"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "2.999"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "2.999"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "3.004"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "3.004"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "3.105"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "3.005"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "3.013"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "3.013"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.024"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.033"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.046"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "4.031"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.036"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.783",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.242"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "4.045"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "3.946"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "4.044"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.046"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "4.054"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "3.950"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "4.062"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "4.061"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "4.982"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1122.057",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0x3011ecc9c5db02b5eaba3b35a79caaf9ff6eee19\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:127: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0x3011ecc9c5db02b5eaba3b35a79caaf9ff6eee19\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "24.935",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0x37bd876d1c4f75523c17bda78953242b6f5f9b4e\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:134: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0x37bd876d1c4f75523c17bda78953242b6f5f9b4e\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.008"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "1.043"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.924"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.946"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.191",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.002"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "2.010",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.002"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "2.008",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "1.985"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "2.079"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    },
    "aabundler": {
      "name": "aabundler",
      "errors": "0",
      "failures": "13",
      "skipped": "0",
      "tests": "171",
      "time": "2209.874",
      "timestamp": "2024-02-28T02:24:32.235542",
      "hostname": "fv-az1536-146",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.752"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "1.864"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "2.065"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "2.005"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.962"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.067"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "1.988"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "12.057"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.115"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "6.994"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.533"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "24.058"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "24.155"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "26.147"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "69.334"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "51.274"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "3.320",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x10000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:254: in test_max_allowed_ops_unstaked_sender\n    assert mempool == wallet_ops[1:-1]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x10000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "5.058",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n  +                nonce='0x10000000000000000',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x40000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x50000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:279: in test_max_allowed_ops_staked_sender\n    assert mempool == wallet_ops[1:]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE     +                nonce='0x10000000000000000',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x40000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x50000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "4.518",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38', nonce='0x0', initCode='0x', callData='0x110205a77540B4A2b24334A983883543A52D5280', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280',\n  +  UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38',\n                   nonce='0x0',\n                   initCode='0x',\n  -                callData='0x',\n  +                callData='0x110205a77540B4A2b24334A983883543A52D5280',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38', nonce='0x0', initCode='0x', callData='0x110205a77540B4A2b24334A983883543A52D5280', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280',\nE     +  UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38',\nE                      nonce='0x0',\nE                      initCode='0x',\nE     -                callData='0x',\nE     +                callData='0x110205a77540B4A2b24334A983883543A52D5280',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "6.064"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "5.455"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.333",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == []\n  Left contains one more item: UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  ,\n  +  UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0x',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_codehash.py:79: in test_codehash_changed\n    assert dump_mempool() == []\nE   AssertionError: assert [UserOperatio...gnature='0x')] == []\nE     Left contains one more item: UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  ,\nE     +  UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0x',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "2.994"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "2.964"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.087"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "2.990"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "2.994"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.103"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "3.007"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.199"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "3.728"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.097"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "4.114"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.927"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "5.055"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.965"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "5.078"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "5.074"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.977"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.128"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "6.936"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "8.059"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.185"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "3.767"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "4.151"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "4.046",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='paymaster has forbidden read from 0xe673156430f4205691eb897064fa52dd10a4a2fe slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x07f93cf1ec1498b21bc8555e40395ebc9c5f4097'}, id=239)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='paymaster has forbidden read from 0xe673156430f4205691eb897064fa52dd10a4a2fe slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x07f93cf1ec1498b21bc8555e40395ebc9c5f4097'}, id=239)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "4.036"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.956"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "4.134"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "4.046"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.042"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "3.948"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "4.054"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "4.047"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.055"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "3.941"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "4.003"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "4.006"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.110"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "4.003"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "3.997"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "4.000"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.994"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "4.117"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.148"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "4.874"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "6.108"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "6.024"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "6.034"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "6.045"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "6.027"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "6.037"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "6.045"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "7.055"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "7.975",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='factory has forbidden read from 0x521cd1a9513cc6188a58849f2101731f2382c474 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0x695119667a0bf93ad0c62c1ef8dc05e52152fa8f'}, id=297)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='factory has forbidden read from 0x521cd1a9513cc6188a58849f2101731f2382c474 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0x695119667a0bf93ad0c62c1ef8dc05e52152fa8f'}, id=297)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "8.069"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "5.001"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "2.880"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "2.950"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "3.053"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "6.090"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "7.050"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "7.143"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "2.866"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "3.051"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "3.037"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "2.953"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "3.979"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "4.095"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "4.009"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "4.014"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.088"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "4.003"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "4.002"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "3.985",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='account has forbidden read from 0xc329d6e7247dc373a4a35a60a30b42d96cf58d11 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x80F31486F0F70e3De97Fc07b54e1fA6157571930'}, id=337)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='account has forbidden read from 0xc329d6e7247dc373a4a35a60a30b42d96cf58d11 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x80F31486F0F70e3De97Fc07b54e1fA6157571930'}, id=337)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.061"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "3.047"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "2.983"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "3.091"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.908"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "3.003"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.004"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "3.031"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.022"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.031"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "3.006"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "3.001"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.005"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "3.000"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.171"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "2.844"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.018"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "3.047"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "3.052"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "2.912",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1687,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1687,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "4.088"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "4.025"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "3.990"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "4.097"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "3.992"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "2.044"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "1.939"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.057"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "2.055"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "1.955"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "2.099"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "1.994"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "3.003"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "3.003"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "3.013"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "3.009"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "2.973",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1764,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1764,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "3.117"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "3.018"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "3.013"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "3.026"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "3.027"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "3.029"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "3.028"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "3.041"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "2.943"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.039"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.078"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.080"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "3.977"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.079"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.684",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.280"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "3.966"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "4.077"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "3.972"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.075"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "5.005"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "5.115"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "5.028"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "5.018"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "5.022"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1274.748"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "102.370"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.010"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.752"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.056"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.949"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.557",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.853",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.946",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.852"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "1.075"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    }
  },
  "20240228/033523": {
    "stackup": {
      "name": "stackup",
      "errors": "0",
      "failures": "14",
      "skipped": "0",
      "tests": "171",
      "time": "1962.707",
      "timestamp": "2024-02-28T03:02:34.071031",
      "hostname": "fv-az1536-146",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.514"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "2.003"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "2.001"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "2.104"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.997"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.111"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "2.015"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "8.787"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.030"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "7.024"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.417"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "23.177"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "23.073"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "23.162"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "65.301"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "57.353"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "2.201",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:260: in test_max_allowed_ops_unstaked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "3.128",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:285: in test_max_allowed_ops_staked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "4.611",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0x',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0xee6b2800',\n  -                maxPriorityFeePerGas='0xb2d05e00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x4b3d23182FE8CE66282FC31084CD29D4cdba4576',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0x',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0xee6b2800',\nE     -                maxPriorityFeePerGas='0xb2d05e00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "4.994",
          "failure": {
            "message": "Exception: expected error object, got:\nOk(result='0x136e2adfb531436339146bb3508547b0175527fa00b0320eed6fdae00b183dee', id=176)",
            "#text": "tests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AttributeError: 'Ok' object has no attribute 'code'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_bundle.py:359: in test_ban_user_sender_double_role_in_bundle\n    assert_rpc_error(\ntests/utils.py:119: in assert_rpc_error\n    raise Exception(f\"expected error object, got:\\n{response}\") from exc\nE   Exception: expected error object, got:\nE   Ok(result='0x136e2adfb531436339146bb3508547b0175527fa00b0320eed6fdae00b183dee', id=176)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "1.791",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/single/bundle/test_bundle.py:382: in test_stake_check_in_bundler\n    response = get_stake_status(paymaster_contract.address, entrypoint_contract.address)\ntests/utils.py:186: in get_stake_status\n    .result\nE   AttributeError: 'Error' object has no attribute 'result'"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.131",
          "failure": {
            "message": "assert 0 == 1\n +  where 0 = len(())",
            "#text": "tests/single/bundle/test_codehash.py:80: in test_codehash_changed\n    assert_useroperation_event(entrypoint_contract, userop, from_block=block_number)\ntests/single/bundle/test_codehash.py:12: in assert_useroperation_event\n    assert len(logs) == 1\nE   assert 0 == 1\nE    +  where 0 = len(())"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "3.051"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "3.056"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.066"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "3.001"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "2.967"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.074"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "2.974"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.150"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "2.789"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.184"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "3.043"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "2.983"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "3.997"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.003"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "4.021"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.020"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "5.039"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.030"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "5.034"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "5.048"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.124"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "4.860"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "7.098"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "7.092"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "6.044"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "4.031"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "3.989"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "4.095"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.018"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "4.011"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "4.011"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "4.014"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.015"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "4.016"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "4.069"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "3.971"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.074"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.981"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "4.065"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "3.971"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "4.079"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "3.970"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.191"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "3.913"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "5.030"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "4.981"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "5.063"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "5.069"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "5.977"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "6.084"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "5.993"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "6.078"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "5.989"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "6.159"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "5.988"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "3.876"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "4.046"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "4.982"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "11.167"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "7.009"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "7.117"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "2.936"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "2.928"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "3.110"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "2.936"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "4.053"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "3.963"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "4.078"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "4.081"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.049"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "3.974"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "3.983"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "4.084"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.040"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "2.926"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "3.058"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "3.072"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.895"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "2.992"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.092"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "3.017"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.015"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.011"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "2.985"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "2.982"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.120"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "2.997"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.035"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "1.910"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.009"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "2.017"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "2.020"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "1.983",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "2.020"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "2.014"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "2.022"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "2.019"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "2.032"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "2.028"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "3.052"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.957"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "3.066"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "2.964"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "3.093"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "4.023"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "6.068"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "5.969"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "3.097"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "2.992"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "2.960",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "3.094"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "2.999"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "2.999"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "3.004"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "3.004"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "3.105"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "3.005"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "3.013"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "3.013"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.024"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.033"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.046"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "4.031"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.036"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.783",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.242"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "4.045"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "3.946"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "4.044"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.046"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "4.054"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "3.950"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "4.062"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "4.061"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "4.982"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1122.057",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0x3011ecc9c5db02b5eaba3b35a79caaf9ff6eee19\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:127: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0x3011ecc9c5db02b5eaba3b35a79caaf9ff6eee19\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "24.935",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0x37bd876d1c4f75523c17bda78953242b6f5f9b4e\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:134: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0x37bd876d1c4f75523c17bda78953242b6f5f9b4e\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.008"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "1.043"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.924"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.946"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.191",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.002"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "2.010",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.002"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "2.008",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "1.985"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "2.079"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    },
    "aabundler": {
      "name": "aabundler",
      "errors": "0",
      "failures": "13",
      "skipped": "0",
      "tests": "171",
      "time": "2209.874",
      "timestamp": "2024-02-28T02:24:32.235542",
      "hostname": "fv-az1536-146",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.752"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "1.864"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "2.065"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "2.005"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.962"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.067"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "1.988"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "12.057"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.115"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "6.994"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.533"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "24.058"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "24.155"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "26.147"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "69.334"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "51.274"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "3.320",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x10000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:254: in test_max_allowed_ops_unstaked_sender\n    assert mempool == wallet_ops[1:-1]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x10000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xCD8ED6623971E8956696bad88F4c6050695CA0E6',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "5.058",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n  +                nonce='0x10000000000000000',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x40000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\n                   nonce='0x50000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:279: in test_max_allowed_ops_staked_sender\n    assert mempool == wallet_ops[1:]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE     +                nonce='0x10000000000000000',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x40000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x837767b57CEE08cf45D13888ca522d965d5f3aE5',\nE                      nonce='0x50000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "4.518",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38', nonce='0x0', initCode='0x', callData='0x110205a77540B4A2b24334A983883543A52D5280', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280',\n  +  UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38',\n                   nonce='0x0',\n                   initCode='0x',\n  -                callData='0x',\n  +                callData='0x110205a77540B4A2b24334A983883543A52D5280',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38', nonce='0x0', initCode='0x', callData='0x110205a77540B4A2b24334A983883543A52D5280', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  UserOperation(sender='0x110205a77540B4A2b24334A983883543A52D5280',\nE     +  UserOperation(sender='0x0018A181BdC5c29f744ff9Fe625e30CE74857b38',\nE                      nonce='0x0',\nE                      initCode='0x',\nE     -                callData='0x',\nE     +                callData='0x110205a77540B4A2b24334A983883543A52D5280',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "6.064"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "5.455"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.333",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == []\n  Left contains one more item: UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  ,\n  +  UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0x',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_codehash.py:79: in test_codehash_changed\n    assert dump_mempool() == []\nE   AssertionError: assert [UserOperatio...gnature='0x')] == []\nE     Left contains one more item: UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  ,\nE     +  UserOperation(sender='0x5bFad5914A34602d2E8CC39e76A2034EFDa904C5',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0x',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "2.994"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "2.964"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.087"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "2.990"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "2.994"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.103"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "3.007"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.199"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "3.728"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.097"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "4.114"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.927"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "5.055"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.965"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "5.078"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "5.074"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.977"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.128"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "6.936"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "8.059"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.185"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "3.767"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "4.151"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "4.046",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='paymaster has forbidden read from 0xe673156430f4205691eb897064fa52dd10a4a2fe slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x07f93cf1ec1498b21bc8555e40395ebc9c5f4097'}, id=239)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='paymaster has forbidden read from 0xe673156430f4205691eb897064fa52dd10a4a2fe slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x07f93cf1ec1498b21bc8555e40395ebc9c5f4097'}, id=239)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "4.036"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.956"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "4.134"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "4.046"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.042"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "3.948"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "4.054"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "4.047"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.055"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "3.941"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "4.003"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "4.006"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.110"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "4.003"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "3.997"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "4.000"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.994"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "4.117"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.148"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "4.874"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "6.108"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "6.024"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "6.034"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "6.045"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "6.027"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "6.037"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "6.045"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "7.055"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "7.975",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='factory has forbidden read from 0x521cd1a9513cc6188a58849f2101731f2382c474 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0x695119667a0bf93ad0c62c1ef8dc05e52152fa8f'}, id=297)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='factory has forbidden read from 0x521cd1a9513cc6188a58849f2101731f2382c474 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0x695119667a0bf93ad0c62c1ef8dc05e52152fa8f'}, id=297)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "8.069"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "5.001"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "2.880"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "2.950"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "3.053"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "6.090"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "7.050"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "7.143"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "2.866"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "3.051"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "3.037"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "2.953"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "3.979"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "4.095"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "4.009"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "4.014"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.088"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "4.003"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "4.002"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "3.985",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='account has forbidden read from 0xc329d6e7247dc373a4a35a60a30b42d96cf58d11 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x80F31486F0F70e3De97Fc07b54e1fA6157571930'}, id=337)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='account has forbidden read from 0xc329d6e7247dc373a4a35a60a30b42d96cf58d11 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x80F31486F0F70e3De97Fc07b54e1fA6157571930'}, id=337)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.061"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "3.047"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "2.983"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "3.091"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.908"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "3.003"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.004"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "3.031"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.022"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.031"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "3.006"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "3.001"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.005"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "3.000"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.171"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "2.844"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.018"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "3.047"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "3.052"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "2.912",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1687,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1687,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "4.088"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "4.025"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "3.990"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "4.097"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "3.992"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "2.044"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "1.939"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.057"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "2.055"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "1.955"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "2.099"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "1.994"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "3.003"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "3.003"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "3.013"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "3.009"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "2.973",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1764,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1764,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "3.117"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "3.018"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "3.013"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "3.026"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "3.027"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "3.029"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "3.028"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "3.041"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "2.943"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.039"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.078"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.080"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "3.977"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.079"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.684",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.280"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "3.966"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "4.077"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "3.972"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.075"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "5.005"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "5.115"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "5.028"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "5.018"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "5.022"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1274.748"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "102.370"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.010"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "0.752"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.056"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.949"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.557",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.853",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.003"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.946",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "0.852"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "1.075"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    }
  },
  "20240202/084750": {
    "stackup": {
      "name": "stackup",
      "errors": "0",
      "failures": "14",
      "skipped": "0",
      "tests": "171",
      "time": "1957.962",
      "timestamp": "2024-02-02T08:15:01.014498",
      "hostname": "fv-az973-656",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.617"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "2.001"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "2.001"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "1.994"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.991"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.105"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "2.005"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "13.894"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.011"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "7.010"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.455"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "23.091"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "23.079"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "23.163"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "60.291"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "62.349"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "2.164",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:260: in test_max_allowed_ops_unstaked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "3.201",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/bundle/test_bundle.py:285: in test_max_allowed_ops_staked_sender\n    assert response.result[\"userOpHash\"] == ophash\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "4.581",
          "failure": {
            "message": "AssertionError: assert [] == [UserOperatio...gnature='0x')]\n  Right contains one more item: UserOperation(sender='0x2aDa3895dd67cACf34af2f73B263eD49096693D8', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  ,\n  -  UserOperation(sender='0x2aDa3895dd67cACf34af2f73B263eD49096693D8',\n  -                nonce='0x0',\n  -                initCode='0x',\n  -                callData='0x',\n  -                callGasLimit='0x493e0',\n  -                verificationGasLimit='0xf4240',\n  -                preVerificationGas='0x493e0',\n  -                maxFeePerGas='0xee6b2800',\n  -                maxPriorityFeePerGas='0xb2d05e00',\n  -                paymasterAndData='0x',\n  -                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [] == [UserOperatio...gnature='0x')]\nE     Right contains one more item: UserOperation(sender='0x2aDa3895dd67cACf34af2f73B263eD49096693D8', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  ,\nE     -  UserOperation(sender='0x2aDa3895dd67cACf34af2f73B263eD49096693D8',\nE     -                nonce='0x0',\nE     -                initCode='0x',\nE     -                callData='0x',\nE     -                callGasLimit='0x493e0',\nE     -                verificationGasLimit='0xf4240',\nE     -                preVerificationGas='0x493e0',\nE     -                maxFeePerGas='0xee6b2800',\nE     -                maxPriorityFeePerGas='0xb2d05e00',\nE     -                paymasterAndData='0x',\nE     -                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "4.961",
          "failure": {
            "message": "Exception: expected error object, got:\nOk(result='0x3834c0e7fb13ca45071eedeb877eb65516429226082155543e7c5c1726db34f2', id=176)",
            "#text": "tests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AttributeError: 'Ok' object has no attribute 'code'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_bundle.py:359: in test_ban_user_sender_double_role_in_bundle\n    assert_rpc_error(\ntests/utils.py:119: in assert_rpc_error\n    raise Exception(f\"expected error object, got:\\n{response}\") from exc\nE   Exception: expected error object, got:\nE   Ok(result='0x3834c0e7fb13ca45071eedeb877eb65516429226082155543e7c5c1726db34f2', id=176)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "1.782",
          "failure": {
            "message": "AttributeError: 'Error' object has no attribute 'result'",
            "#text": "tests/single/bundle/test_bundle.py:382: in test_stake_check_in_bundler\n    response = get_stake_status(paymaster_contract.address, entrypoint_contract.address)\ntests/utils.py:186: in get_stake_status\n    .result\nE   AttributeError: 'Error' object has no attribute 'result'"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.186",
          "failure": {
            "message": "assert 0 == 1\n +  where 0 = len(())",
            "#text": "tests/single/bundle/test_codehash.py:80: in test_codehash_changed\n    assert_useroperation_event(entrypoint_contract, userop, from_block=block_number)\ntests/single/bundle/test_codehash.py:12: in assert_useroperation_event\n    assert len(logs) == 1\nE   assert 0 == 1\nE    +  where 0 = len(())"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "3.026"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "3.041"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.047"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "2.974"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "3.051"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.056"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "3.054"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.120"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "2.768"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.172"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "3.041"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "2.956"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "3.971"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.096"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "3.990"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "3.986"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.091"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.005"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "5.008"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "5.016"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.172"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "4.830"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "5.117"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "5.014"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "6.105"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "6.959"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "6.099"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "7.044"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.004"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "4.086"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "3.986"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "3.997"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.093"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "3.978"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "3.934"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "4.052"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.060"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "4.054"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "3.951"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "4.042"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "4.047"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "4.044"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.065"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "3.990"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "5.001"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "5.040"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "5.012"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "5.024"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "5.011"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "5.028"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "5.029"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "5.025"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "5.046"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "6.142"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "5.957"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "3.868"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "3.009"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "3.015"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "6.105"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "8.077"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "8.088"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "3.944"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "4.970"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "6.174"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "5.895"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "4.034"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "4.046"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "4.050"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "3.950"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.132"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "3.953"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "4.060"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "3.953"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.025"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "3.008"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "3.032"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "3.040"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.978"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "2.983"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.076"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "2.990"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.006"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.004"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "2.975"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "3.088"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "2.974"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "3.080"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.032"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "1.907"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.041"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "2.003"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "2.007"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "1.971",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=370).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "2.006"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "2.013"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "2.011"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "2.109"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "2.025"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "1.925"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "2.032"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.031"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "2.040"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "2.037"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "1.969"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "2.072"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "2.984"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "2.991"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "3.092"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "4.014"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "3.985",
          "failure": {
            "message": "AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   AssertionError: assert -32500 == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where -32500 = Error(code=-32500, message='validationResult: cannot assert type: data is not of type string, failedOp: cannot assert ...ring, failedOp: cannot assert type: data is not of type string, err: method handler crashed, data: %!s(<nil>)', id=387).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "4.018"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "4.017"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "4.026"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "4.029"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "4.022"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "5.052"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "6.077"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "4.965"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "3.024"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.015"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.128"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.033"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "4.033"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.035"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.680",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.246"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "4.042"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "4.044"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "4.043"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.042"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "3.944"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "4.047"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "4.060"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "4.058"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "3.958"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1117.311",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0xf6be041b1df53c36802b7967de092eff85e97069\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:127: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0xf6be041b1df53c36802b7967de092eff85e97069\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "24.177",
          "failure": {
            "message": "AssertionError: Could not find reputation of 0x7a368424b10504b1d433efd30d8ac132bc66749b\nassert None is not None",
            "#text": "tests/single/reputation/test_reputation.py:134: in test_staked_entity_reputation_threshold\n    assert_reputation_status(\ntests/single/reputation/test_reputation.py:48: in assert_reputation_status\n    assert reputation is not None, \"Could not find reputation of \" + address.lower()\nE   AssertionError: Could not find reputation of 0x7a368424b10504b1d433efd30d8ac132bc66749b\nE   assert None is not None"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.007"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "1.039"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.000"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "0.943"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.189",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.002"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "0.979",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.002"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "0.973",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "1.052"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "0.948"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    },
    "aabundler": {
      "name": "aabundler",
      "errors": "0",
      "failures": "13",
      "skipped": "0",
      "tests": "171",
      "time": "2208.409",
      "timestamp": "2024-02-02T07:37:00.456964",
      "hostname": "fv-az973-656",
      "testcase": {
        "0": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_priority_fee_bump]",
          "time": "1.377"
        },
        "1": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[only_max_fee_bump]",
          "time": "2.047"
        },
        "2": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_same_fee]",
          "time": "1.983"
        },
        "3": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[with_less_fee]",
          "time": "2.061"
        },
        "4": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_below_threshold]",
          "time": "1.941"
        },
        "5": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_at_threshold]",
          "time": "2.049"
        },
        "6": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_bundle_replace_op[fee_bump_above_threshold]",
          "time": "1.944"
        },
        "7": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-sender]",
          "time": "14.190"
        },
        "8": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-paymaster]",
          "time": "7.989"
        },
        "9": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-020-banned-entity-not-allowed-banned-factory]",
          "time": "7.047"
        },
        "10": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-sender]",
          "time": "23.443"
        },
        "11": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-paymaster]",
          "time": "23.167"
        },
        "12": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[SREP-030-throttled-entity-allowed-a-little-throttled-factory]",
          "time": "24.087"
        },
        "13": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-sender]",
          "time": "24.150"
        },
        "14": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-paymaster]",
          "time": "63.378"
        },
        "15": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_mempool_reputation_rules_all_entities[UREP-010 UREP-020-unstaked-entity-allowed-function-unstaked-factory]",
          "time": "59.203"
        },
        "16": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_unstaked_sender",
          "time": "2.260",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\n                   nonce='0x10000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:254: in test_max_allowed_ops_unstaked_sender\n    assert mempool == wallet_ops[1:-1]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x0', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7', nonce='0x30000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\nE                      nonce='0x10000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0xa6DB987Ecb5B00c678c427a2DA870fd5EcD758F7',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "17": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_max_allowed_ops_staked_sender",
          "time": "5.025",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Left contains one more item: UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  +  UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\n  +                nonce='0x10000000000000000',\n  +                initCode='0x',\n  +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n     UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\n                   nonce='0x20000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\n                   nonce='0x30000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\n                   nonce='0x40000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n     UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\n                   nonce='0x50000000000000000',\n                   initCode='0x',\n                   callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:279: in test_max_allowed_ops_staked_sender\n    assert mempool == wallet_ops[1:]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x10000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x20000000000000000', initCode='0x', callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Left contains one more item: UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5', nonce='0x50000000000000000', initCode='0x', callDat...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     +  UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\nE     +                nonce='0x10000000000000000',\nE     +                initCode='0x',\nE     +                callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE        UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\nE                      nonce='0x20000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\nE                      nonce='0x30000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\nE                      nonce='0x40000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE        UserOperation(sender='0x846660719Cf5214D9131298fa88187335928deb5',\nE                      nonce='0x50000000000000000',\nE                      initCode='0x',\nE                      callData='0xa9e966b70000000000000000000000000000000000000000000000000000000000000001',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "18": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_op_access_other_ops_sender_in_bundle",
          "time": "5.598",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\n  At index 0 diff: UserOperation(sender='0x4aE961AbC6A8eEDc069Ccc969074dA9BeFbcB22e', nonce='0x0', initCode='0x', callData='0x0310858697d94b346B60798E20ea1a4401df59b1', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x0310858697d94b346B60798E20ea1a4401df59b1', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  UserOperation(sender='0x0310858697d94b346B60798E20ea1a4401df59b1',\n  +  UserOperation(sender='0x4aE961AbC6A8eEDc069Ccc969074dA9BeFbcB22e',\n                   nonce='0x0',\n                   initCode='0x',\n  -                callData='0x',\n  +                callData='0x0310858697d94b346B60798E20ea1a4401df59b1',\n                   callGasLimit='0x493e0',\n                   verificationGasLimit='0xf4240',\n                   preVerificationGas='0x493e0',\n                   maxFeePerGas='0xee6b2800',\n                   maxPriorityFeePerGas='0xb2d05e00',\n                   paymasterAndData='0x',\n                   signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_bundle.py:319: in test_ban_user_op_access_other_ops_sender_in_bundle\n    assert dump_mempool() == [user_op2]\nE   AssertionError: assert [UserOperatio...gnature='0x')] == [UserOperatio...gnature='0x')]\nE     At index 0 diff: UserOperation(sender='0x4aE961AbC6A8eEDc069Ccc969074dA9BeFbcB22e', nonce='0x0', initCode='0x', callData='0x0310858697d94b346B60798E20ea1a4401df59b1', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x') != UserOperation(sender='0x0310858697d94b346B60798E20ea1a4401df59b1', nonce='0x0', initCode='0x', callData='0x', callGasLimit='0x493e0', verificationGasLimit='0xf4240', preVerificationGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  UserOperation(sender='0x0310858697d94b346B60798E20ea1a4401df59b1',\nE     +  UserOperation(sender='0x4aE961AbC6A8eEDc069Ccc969074dA9BeFbcB22e',\nE                      nonce='0x0',\nE                      initCode='0x',\nE     -                callData='0x',\nE     +                callData='0x0310858697d94b346B60798E20ea1a4401df59b1',\nE                      callGasLimit='0x493e0',\nE                      verificationGasLimit='0xf4240',\nE                      preVerificationGas='0x493e0',\nE                      maxFeePerGas='0xee6b2800',\nE                      maxPriorityFeePerGas='0xb2d05e00',\nE                      paymasterAndData='0x',\nE                      signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "19": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_ban_user_sender_double_role_in_bundle",
          "time": "5.109"
        },
        "20": {
          "classname": "tests.single.bundle.test_bundle",
          "name": "test_stake_check_in_bundler",
          "time": "4.407"
        },
        "21": {
          "classname": "tests.single.bundle.test_codehash",
          "name": "test_codehash_changed",
          "time": "6.309",
          "failure": {
            "message": "AssertionError: assert [UserOperatio...gnature='0x')] == []\n  Left contains one more item: UserOperation(sender='0x4582E11c4540dffa02D0a636b18cB04e45E6de0D', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\n  Full diff:\n    [\n  -  ,\n  +  UserOperation(sender='0x4582E11c4540dffa02D0a636b18cB04e45E6de0D',\n  +                nonce='0x0',\n  +                initCode='0x',\n  +                callData='0x',\n  +                callGasLimit='0x493e0',\n  +                verificationGasLimit='0xf4240',\n  +                preVerificationGas='0x493e0',\n  +                maxFeePerGas='0xee6b2800',\n  +                maxPriorityFeePerGas='0xb2d05e00',\n  +                paymasterAndData='0x',\n  +                signature='0x'),\n    ]",
            "#text": "tests/single/bundle/test_codehash.py:79: in test_codehash_changed\n    assert dump_mempool() == []\nE   AssertionError: assert [UserOperatio...gnature='0x')] == []\nE     Left contains one more item: UserOperation(sender='0x4582E11c4540dffa02D0a636b18cB04e45E6de0D', nonce='0x0', initCode='0x', callData='0x', callGasL...tionGas='0x493e0', maxFeePerGas='0xee6b2800', maxPriorityFeePerGas='0xb2d05e00', paymasterAndData='0x', signature='0x')\nE     Full diff:\nE       [\nE     -  ,\nE     +  UserOperation(sender='0x4582E11c4540dffa02D0a636b18cB04e45E6de0D',\nE     +                nonce='0x0',\nE     +                initCode='0x',\nE     +                callData='0x',\nE     +                callGasLimit='0x493e0',\nE     +                verificationGasLimit='0xf4240',\nE     +                preVerificationGas='0x493e0',\nE     +                maxFeePerGas='0xee6b2800',\nE     +                maxPriorityFeePerGas='0xb2d05e00',\nE     +                paymasterAndData='0x',\nE     +                signature='0x'),\nE       ]"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "22": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][paymaster][no_storage][ok]",
          "time": "2.961"
        },
        "23": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]unstaked][paymaster][storage][drop]",
          "time": "3.062"
        },
        "24": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage][drop]",
          "time": "3.073"
        },
        "25": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][reference_storage_struct][drop]",
          "time": "2.969"
        },
        "26": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][paymaster][account_storage][ok]",
          "time": "2.980"
        },
        "27": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage][ok]",
          "time": "3.084"
        },
        "28": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][paymaster][account_reference_storage_struct][ok]",
          "time": "2.988"
        },
        "29": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop0]",
          "time": "6.167"
        },
        "30": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]unstaked][paymaster][context][drop]",
          "time": "2.782"
        },
        "31": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][paymaster][external_storage_read][drop]",
          "time": "3.176"
        },
        "32": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][out_of_gas][drop]",
          "time": "3.065"
        },
        "33": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.909"
        },
        "34": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][paymaster][no_storage][ok]",
          "time": "3.997"
        },
        "35": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][paymaster][storage][ok]",
          "time": "4.110"
        },
        "36": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage][ok]",
          "time": "4.954"
        },
        "37": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][paymaster][reference_storage_struct][ok]",
          "time": "4.031"
        },
        "38": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][reference_storage_struct][ok]",
          "time": "5.043"
        },
        "39": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][paymaster][account_storage][ok]",
          "time": "5.047"
        },
        "40": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage][ok]",
          "time": "5.060"
        },
        "41": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][paymaster][account_reference_storage_struct][ok]",
          "time": "4.954"
        },
        "42": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]staked][paymaster][account_reference_storage_init_code][ok]",
          "time": "8.264"
        },
        "43": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[EREP-050]staked][paymaster][context][ok]",
          "time": "4.758"
        },
        "44": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_write][drop]",
          "time": "7.095"
        },
        "45": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][paymaster][external_storage_read][ok]",
          "time": "8.121",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='paymaster has forbidden read from 0xc0241f56be97204351195588b484747e20420377 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x30f6985eb7e2185332289b39c9c45e13feeac266'}, id=239)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='paymaster has forbidden read from 0xc0241f56be97204351195588b484747e20420377 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'paymaster': '0x30f6985eb7e2185332289b39c9c45e13feeac266'}, id=239)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "46": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][out_of_gas][drop]",
          "time": "7.070"
        },
        "47": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][paymaster][sstore_out_of_gas][drop]",
          "time": "3.919"
        },
        "48": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][no_storage][ok]",
          "time": "4.120"
        },
        "49": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][storage][drop]",
          "time": "4.006"
        },
        "50": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][reference_storage][drop]",
          "time": "4.022"
        },
        "51": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]unstaked][factory][reference_storage_struct][drop]",
          "time": "4.030"
        },
        "52": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][factory][account_storage][ok]",
          "time": "4.024"
        },
        "53": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage][drop]",
          "time": "4.023"
        },
        "54": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][factory][account_reference_storage_struct][drop]",
          "time": "4.021"
        },
        "55": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][factory][external_storage_read][drop]",
          "time": "4.036"
        },
        "56": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-042]unstaked][factory][EXTCODEx_CALLx_undeployed_sender][ok]",
          "time": "3.995"
        },
        "57": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODESIZE_undeployed_contract][drop]",
          "time": "3.973"
        },
        "58": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODEHASH_undeployed_contract][drop]",
          "time": "4.091"
        },
        "59": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][EXTCODECOPY_undeployed_contract][drop]",
          "time": "3.987"
        },
        "60": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALL_undeployed_contract][drop]",
          "time": "3.985"
        },
        "61": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][CALLCODE_undeployed_contract][drop]",
          "time": "4.083"
        },
        "62": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][DELEGATECALL_undeployed_contract][drop]",
          "time": "3.981"
        },
        "63": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][factory][STATICCALL_undeployed_contract][drop]",
          "time": "3.981"
        },
        "64": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][out_of_gas][drop]",
          "time": "4.213"
        },
        "65": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][factory][sstore_out_of_gas][drop]",
          "time": "3.946"
        },
        "66": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][factory][no_storage][ok]",
          "time": "4.955"
        },
        "67": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-031]staked][factory][storage][ok]",
          "time": "5.070"
        },
        "68": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage][ok]",
          "time": "5.088"
        },
        "69": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-032]staked][factory][reference_storage_struct][ok]",
          "time": "6.004"
        },
        "70": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][factory][account_storage][ok]",
          "time": "5.999"
        },
        "71": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage][ok]",
          "time": "6.113"
        },
        "72": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][factory][account_reference_storage_struct][ok]",
          "time": "6.009"
        },
        "73": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_write][drop]",
          "time": "6.043"
        },
        "74": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][factory][external_storage_read][ok]",
          "time": "5.996",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='factory has forbidden read from 0xb752c7333249ddfaa89a43f769504d2cf6649856 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0xf664b82f1b3dd462193bafaca1bde2504a73cd0c'}, id=297)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='factory has forbidden read from 0xb752c7333249ddfaa89a43f769504d2cf6649856 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'factory': '0xf664b82f1b3dd462193bafaca1bde2504a73cd0c'}, id=297)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "75": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][out_of_gas][drop]",
          "time": "6.081"
        },
        "76": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][factory][sstore_out_of_gas][drop]",
          "time": "6.002"
        },
        "77": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][no_storage][ok]",
          "time": "3.886"
        },
        "78": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]unstaked][account][account_storage][ok]",
          "time": "4.059"
        },
        "79": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage][ok]",
          "time": "5.024"
        },
        "80": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][drop]",
          "time": "11.052"
        },
        "81": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][account][account_reference_storage_init_code][ok]",
          "time": "10.082"
        },
        "82": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-022]unstaked][paymaster][account_reference_storage_init_code][drop1]",
          "time": "7.122"
        },
        "83": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]unstaked][account][account_reference_storage_struct][ok]",
          "time": "2.843"
        },
        "84": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]unstaked][account][external_storage_read][drop]",
          "time": "3.033"
        },
        "85": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][out_of_gas][drop]",
          "time": "3.119"
        },
        "86": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]unstaked][account][sstore_out_of_gas][drop]",
          "time": "2.955"
        },
        "87": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-000]staked][account][no_storage][ok]",
          "time": "3.954"
        },
        "88": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-010]staked][account][account_storage][ok]",
          "time": "4.078"
        },
        "89": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage][ok]",
          "time": "3.983"
        },
        "90": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-021]staked][account][account_reference_storage_struct][ok]",
          "time": "4.097"
        },
        "91": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][out_of_gas][drop]",
          "time": "4.058"
        },
        "92": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-020]staked][account][sstore_out_of_gas][drop]",
          "time": "3.986"
        },
        "93": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_write][drop]",
          "time": "3.983"
        },
        "94": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[STO-033]staked][account][external_storage_read][ok]",
          "time": "3.982",
          "failure": {
            "message": "Exception: expected result object, got:\nError(code=-32502, message='account has forbidden read from 0x3f9bf21944342d5e28301fe877b974051ceffe48 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x91D95eC91D23e44CbdCb8d237D925B47ABfA31A1'}, id=337)",
            "#text": "tests/utils.py:109: in assert_ok\n    assert response.result\nE   AttributeError: 'Error' object has no attribute 'result'\n\nThe above exception was the direct cause of the following exception:\ntests/single/bundle/test_storage_rules.py:769: in test_rule\n    case.assert_func(response)\ntests/utils.py:111: in assert_ok\n    raise Exception(f\"expected result object, got:\\n{response}\") from exc\nE   Exception: expected result object, got:\nE   Error(code=-32502, message='account has forbidden read from 0x3f9bf21944342d5e28301fe877b974051ceffe48 slot 0xaed3469875ad6750e818d667b5bd08036a9d5a353af5c0e81a03431a837a7b39', data={'account': '0x91D95eC91D23e44CbdCb8d237D925B47ABfA31A1'}, id=337)"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "95": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-011]unstaked][account][entryPoint_call_balanceOf][drop]",
          "time": "3.047"
        },
        "96": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-061]unstaked][account][eth_value_transfer_forbidden][drop]",
          "time": "3.043"
        },
        "97": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-053]unstaked][account][eth_value_transfer_entryPoint][ok]",
          "time": "3.072"
        },
        "98": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-052]unstaked][account][eth_value_transfer_entryPoint_depositTo][ok]",
          "time": "2.984"
        },
        "99": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODESIZE_undeployed_contract][drop]",
          "time": "2.893"
        },
        "100": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODEHASH_undeployed_contract][drop]",
          "time": "3.092"
        },
        "101": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][EXTCODECOPY_undeployed_contract][drop]",
          "time": "2.998"
        },
        "102": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODESIZE_entrypoint][drop]",
          "time": "3.007"
        },
        "103": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODEHASH_entrypoint][drop]",
          "time": "3.022"
        },
        "104": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-054]unstaked][account][EXTCODECOPY_entrypoint][drop]",
          "time": "3.020"
        },
        "105": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALL_undeployed_contract][drop]",
          "time": "2.986"
        },
        "106": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][CALLCODE_undeployed_contract][drop]",
          "time": "3.091"
        },
        "107": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][DELEGATECALL_undeployed_contract][drop]",
          "time": "2.993"
        },
        "108": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-041]unstaked][account][STATICCALL_undeployed_contract][drop]",
          "time": "2.992"
        },
        "109": {
          "classname": "tests.single.bundle.test_storage_rules",
          "name": "test_rule[[OP-062]unstaked][account][CALL_undeployed_contract_allowed_precompile][ok]",
          "time": "3.055"
        },
        "110": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GAS]",
          "time": "1.916"
        },
        "111": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[NUMBER]",
          "time": "2.018"
        },
        "112": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[TIMESTAMP]",
          "time": "2.015"
        },
        "113": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[COINBASE]",
          "time": "2.016"
        },
        "114": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[DIFFICULTY]",
          "time": "1.989",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1661,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code",
            "#text": "tests/single/opbanning/test_op_banning.py:46: in test_account_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1661,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=372).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "115": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BASEFEE]",
          "time": "2.022"
        },
        "116": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASLIMIT]",
          "time": "2.037"
        },
        "117": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[GASPRICE]",
          "time": "2.043"
        },
        "118": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFBALANCE]",
          "time": "2.034"
        },
        "119": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BALANCE]",
          "time": "2.988"
        },
        "120": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[ORIGIN]",
          "time": "2.037"
        },
        "121": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[BLOCKHASH]",
          "time": "2.957"
        },
        "122": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE]",
          "time": "2.054"
        },
        "123": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[CREATE2]",
          "time": "3.091"
        },
        "124": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_banned_opcode[SELFDESTRUCT]",
          "time": "2.972"
        },
        "125": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS CALL]",
          "time": "3.008"
        },
        "126": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_account_allowed_opcode_sequence[GAS DELEGATECALL]",
          "time": "3.009"
        },
        "127": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GAS]",
          "time": "4.015"
        },
        "128": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[NUMBER]",
          "time": "5.038"
        },
        "129": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[TIMESTAMP]",
          "time": "5.039"
        },
        "130": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[COINBASE]",
          "time": "6.072"
        },
        "131": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[DIFFICULTY]",
          "time": "2.961",
          "failure": {
            "message": "assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\n +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1742,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code",
            "#text": "tests/single/opbanning/test_op_banning.py:67: in test_paymaster_banned_opcode\n    assert_rpc_error(\ntests/utils.py:116: in assert_rpc_error\n    assert response.code == code\nE   assert 'SERVER_ERROR' == <RPCErrorCode.BANNED_OPCODE: -32502>\nE    +  where 'SERVER_ERROR' = Error(code='SERVER_ERROR', message='processing response error (body=\"{\\\\\"jsonrpc\\\\\":\\\\\"2.0\\\\\",\\\\\"id\\\\\":1742,\\\\\"error\\\\...\"2.0\\\\\"}\", requestMethod=\"POST\", url=\"http://eth-node:8545\", code=SERVER_ERROR, version=web/5.7.1)', data=None, id=389).code"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "132": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BASEFEE]",
          "time": "3.001"
        },
        "133": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASLIMIT]",
          "time": "3.115"
        },
        "134": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[GASPRICE]",
          "time": "3.006"
        },
        "135": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFBALANCE]",
          "time": "3.014"
        },
        "136": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BALANCE]",
          "time": "3.012"
        },
        "137": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[ORIGIN]",
          "time": "3.010"
        },
        "138": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[BLOCKHASH]",
          "time": "3.014"
        },
        "139": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE]",
          "time": "3.030"
        },
        "140": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[CREATE2]",
          "time": "3.025"
        },
        "141": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_paymaster_banned_opcode[SELFDESTRUCT]",
          "time": "3.026"
        },
        "142": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GAS]",
          "time": "4.044"
        },
        "143": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[NUMBER]",
          "time": "4.048"
        },
        "144": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[TIMESTAMP]",
          "time": "4.056"
        },
        "145": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[COINBASE]",
          "time": "4.056"
        },
        "146": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[DIFFICULTY]",
          "time": "1.680",
          "failure": {
            "message": "ValueError: {'code': -32603, 'message': 'method handler crashed'}",
            "#text": "tests/single/opbanning/test_op_banning.py:80: in test_factory_banned_opcode\n    ).build_transaction()[\"data\"][2:]\n.venv/lib/python3.10/site-packages/web3/contract.py:1099: in build_transaction\n    return build_transaction_for_function(\n.venv/lib/python3.10/site-packages/web3/contract.py:1672: in build_transaction_for_function\n    prepared_transaction = fill_transaction_defaults(web3, prepared_transaction)\ncytoolz/functoolz.pyx:249: in cytoolz.functoolz.curry.__call__\n    ???\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:114: in fill_transaction_defaults\n    default_val = default_getter(web3, transaction)\n.venv/lib/python3.10/site-packages/web3/_utils/transactions.py:60: in <lambda>\n    'gas': lambda web3, tx: web3.eth.estimate_gas(tx),\n.venv/lib/python3.10/site-packages/web3/eth.py:868: in estimate_gas\n    return self._estimate_gas(transaction, block_identifier)\n.venv/lib/python3.10/site-packages/web3/module.py:57: in caller\n    result = w3.manager.request_blocking(method_str,\n.venv/lib/python3.10/site-packages/web3/manager.py:198: in request_blocking\n    return self.formatted_response(response,\n.venv/lib/python3.10/site-packages/web3/manager.py:171: in formatted_response\n    raise ValueError(response[\"error\"])\nE   ValueError: {'code': -32603, 'message': 'method handler crashed'}"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "147": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BASEFEE]",
          "time": "4.258"
        },
        "148": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASLIMIT]",
          "time": "4.063"
        },
        "149": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[GASPRICE]",
          "time": "3.958"
        },
        "150": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFBALANCE]",
          "time": "4.056"
        },
        "151": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BALANCE]",
          "time": "4.065"
        },
        "152": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[ORIGIN]",
          "time": "3.968"
        },
        "153": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[BLOCKHASH]",
          "time": "4.064"
        },
        "154": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE]",
          "time": "3.979"
        },
        "155": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[CREATE2]",
          "time": "4.082"
        },
        "156": {
          "classname": "tests.single.opbanning.test_op_banning",
          "name": "test_factory_banned_opcode[SELFDESTRUCT]",
          "time": "3.983"
        },
        "157": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[with_factory]",
          "time": "1267.710"
        },
        "158": {
          "classname": "tests.single.reputation.test_reputation",
          "name": "test_staked_entity_reputation_threshold[without_factory]",
          "time": "103.628"
        },
        "159": {
          "classname": "tests.single.rpc.test_eth_chainId",
          "name": "test_eth_chainId[]",
          "time": "0.010"
        },
        "160": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas[]",
          "time": "1.468"
        },
        "161": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_execution_revert",
          "time": "1.052"
        },
        "162": {
          "classname": "tests.single.rpc.test_eth_estimateUserOperationGas",
          "name": "test_eth_estimateUserOperationGas_simulation_revert",
          "time": "1.048"
        },
        "163": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash[]",
          "time": "1.444",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationByHash.py:14: in test_eth_getUserOperationByHash\n    assert userop_hash(\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "164": {
          "classname": "tests.single.rpc.test_eth_getUserOperationByHash",
          "name": "test_eth_getUserOperationByHash_error",
          "time": "0.003"
        },
        "165": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt[]",
          "time": "1.897",
          "failure": {
            "message": "TypeError: 'NoneType' object is not subscriptable",
            "#text": "tests/single/rpc/test_eth_getUserOperationReceipt.py:15: in test_eth_getUserOperationReceipt\n    assert response.result[\"userOpHash\"] == userop_hash(helper_contract, userop)\nE   TypeError: 'NoneType' object is not subscriptable"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "166": {
          "classname": "tests.single.rpc.test_eth_getUserOperationReceipt",
          "name": "test_eth_getUserOperationReceipt_error",
          "time": "0.002"
        },
        "167": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation[]",
          "time": "1.959",
          "failure": {
            "message": "assert 0 == 1111111",
            "#text": "tests/single/rpc/test_eth_sendUserOperation.py:20: in test_eth_sendUserOperation\n    assert state_after == 1111111\nE   assert 0 == 1111111"
          },
          "system-out": "--------------------------------- Captured Log ---------------------------------\n\n--------------------------------- Captured Out ---------------------------------",
          "system-err": "--------------------------------- Captured Err ---------------------------------"
        },
        "168": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_revert",
          "time": "1.873"
        },
        "169": {
          "classname": "tests.single.rpc.test_eth_sendUserOperation",
          "name": "test_eth_sendUserOperation_invalid_signature",
          "time": "2.090"
        },
        "170": {
          "classname": "tests.single.rpc.test_eth_supportedEntryPoints",
          "name": "test_eth_supportedEntryPoints[]",
          "time": "0.012"
        }
      }
    }
  }
}
