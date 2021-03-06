/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IBatchFlashBorrowerInterface extends ethers.utils.Interface {
  functions: {
    "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onBatchFlashLoan",
    values: [string, string[], BigNumberish[], BigNumberish[], BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onBatchFlashLoan",
    data: BytesLike
  ): Result;

  events: {};
}

export class IBatchFlashBorrower extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IBatchFlashBorrowerInterface;

  functions: {
    onBatchFlashLoan(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)"(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onBatchFlashLoan(
    sender: string,
    tokens: string[],
    amounts: BigNumberish[],
    fees: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)"(
    sender: string,
    tokens: string[],
    amounts: BigNumberish[],
    fees: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onBatchFlashLoan(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)"(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onBatchFlashLoan(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)"(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onBatchFlashLoan(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onBatchFlashLoan(address,address[],uint256[],uint256[],bytes)"(
      sender: string,
      tokens: string[],
      amounts: BigNumberish[],
      fees: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
