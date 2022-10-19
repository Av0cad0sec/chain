/*
 * This file is part of the Nodle Chain distributed at https://github.com/NodleCode/chain
 * Copyright (C) 2020-2022  Nodle International
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//! Autogenerated weights for pallet_preimage
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-10-19, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// target/release/nodle-parachain
// benchmark
// pallet
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=*
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --template=./.maintain/frame-weight-template.hbs
// --output=weights

#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{
	traits::Get,
	weights::{constants::RocksDbWeight, Weight},
};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_preimage.
pub trait WeightInfo {
	fn note_preimage(s: u32) -> Weight;
	fn note_requested_preimage(s: u32) -> Weight;
	fn note_no_deposit_preimage(s: u32) -> Weight;
	fn unnote_preimage() -> Weight;
	fn unnote_no_deposit_preimage() -> Weight;
	fn request_preimage() -> Weight;
	fn request_no_deposit_preimage() -> Weight;
	fn request_unnoted_preimage() -> Weight;
	fn request_requested_preimage() -> Weight;
	fn unrequest_preimage() -> Weight;
	fn unrequest_unnoted_preimage() -> Weight;
	fn unrequest_multi_referenced_preimage() -> Weight;
}

/// Weights for pallet_preimage using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);

impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	fn note_preimage(s: u32) -> Weight {
		Weight::from_ref_time(212_269_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(T::DbWeight::get().reads(6 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	fn note_requested_preimage(s: u32) -> Weight {
		Weight::from_ref_time(54_659_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(T::DbWeight::get().reads(6 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	fn note_no_deposit_preimage(s: u32) -> Weight {
		Weight::from_ref_time(83_657_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(T::DbWeight::get().reads(6 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	fn unnote_preimage() -> Weight {
		Weight::from_ref_time(84_740_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	fn unnote_no_deposit_preimage() -> Weight {
		Weight::from_ref_time(51_080_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	fn request_preimage() -> Weight {
		Weight::from_ref_time(81_910_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	fn request_no_deposit_preimage() -> Weight {
		Weight::from_ref_time(48_669_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	fn request_unnoted_preimage() -> Weight {
		Weight::from_ref_time(42_451_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	fn request_requested_preimage() -> Weight {
		Weight::from_ref_time(23_300_000 as u64)
			.saturating_add(T::DbWeight::get().reads(1 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	fn unrequest_preimage() -> Weight {
		Weight::from_ref_time(52_080_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	fn unrequest_unnoted_preimage() -> Weight {
		Weight::from_ref_time(47_090_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	fn unrequest_multi_referenced_preimage() -> Weight {
		Weight::from_ref_time(23_380_000 as u64)
			.saturating_add(T::DbWeight::get().reads(1 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
}

// For backwards compatibility and tests
impl WeightInfo for () {
	fn note_preimage(s: u32) -> Weight {
		Weight::from_ref_time(212_269_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(RocksDbWeight::get().reads(6 as u64))
			.saturating_add(RocksDbWeight::get().writes(4 as u64))
	}
	fn note_requested_preimage(s: u32) -> Weight {
		Weight::from_ref_time(54_659_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(RocksDbWeight::get().reads(6 as u64))
			.saturating_add(RocksDbWeight::get().writes(3 as u64))
	}
	fn note_no_deposit_preimage(s: u32) -> Weight {
		Weight::from_ref_time(83_657_000 as u64)
			// Standard Error: 0
			.saturating_add(Weight::from_ref_time(2_000).saturating_mul(s as u64))
			.saturating_add(RocksDbWeight::get().reads(6 as u64))
			.saturating_add(RocksDbWeight::get().writes(3 as u64))
	}
	fn unnote_preimage() -> Weight {
		Weight::from_ref_time(84_740_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(4 as u64))
	}
	fn unnote_no_deposit_preimage() -> Weight {
		Weight::from_ref_time(51_080_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(4 as u64))
	}
	fn request_preimage() -> Weight {
		Weight::from_ref_time(81_910_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(3 as u64))
	}
	fn request_no_deposit_preimage() -> Weight {
		Weight::from_ref_time(48_669_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(3 as u64))
	}
	fn request_unnoted_preimage() -> Weight {
		Weight::from_ref_time(42_451_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(3 as u64))
	}
	fn request_requested_preimage() -> Weight {
		Weight::from_ref_time(23_300_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(1 as u64))
			.saturating_add(RocksDbWeight::get().writes(1 as u64))
	}
	fn unrequest_preimage() -> Weight {
		Weight::from_ref_time(52_080_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(4 as u64))
	}
	fn unrequest_unnoted_preimage() -> Weight {
		Weight::from_ref_time(47_090_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(5 as u64))
			.saturating_add(RocksDbWeight::get().writes(4 as u64))
	}
	fn unrequest_multi_referenced_preimage() -> Weight {
		Weight::from_ref_time(23_380_000 as u64)
			.saturating_add(RocksDbWeight::get().reads(1 as u64))
			.saturating_add(RocksDbWeight::get().writes(1 as u64))
	}
}
