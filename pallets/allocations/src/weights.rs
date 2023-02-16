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

//! Autogenerated weights for pallet_allocations
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-02-16, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `chain-bench-012bd056`, CPU: `AMD EPYC 7B13`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/nodle-parachain
// benchmark
// pallet
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=pallet_allocations
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --template=./.maintain/internal_pallet_weights.hbs
// --output=weights

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{constants::RocksDbWeight, Weight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_allocations.
pub trait WeightInfo {
	fn allocate(b: u32, ) -> Weight;
	fn calc_quota() -> Weight;
	fn renew_quota() -> Weight;
	fn checked_update_session_quota() -> Weight;
	fn set_curve_starting_block() -> Weight;
}

/// Weight functions for `pallet_allocations`.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	// Storage: Allocations SessionQuota (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:1)
	// Storage: System Account (r:3 w:3)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	/// The range of component `b` is `[1, 500]`.
	fn allocate(b: u32, ) -> Weight {
		// Minimum execution time: 91_910 nanoseconds.
		Weight::from_ref_time(43_980_848_u64)
			// Standard Error: 9_014
			.saturating_add(Weight::from_ref_time(27_585_705_u64).saturating_mul(b as u64))
			.saturating_add(T::DbWeight::get().reads(8_u64))
			.saturating_add(T::DbWeight::get().reads((1_u64).saturating_mul(b as u64)))
			.saturating_add(T::DbWeight::get().writes(6_u64))
			.saturating_add(T::DbWeight::get().writes((1_u64).saturating_mul(b as u64)))
	}
	// Storage: Allocations SessionQuotaCalculationSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations NextSessionQuota (r:0 w:1)
	fn calc_quota() -> Weight {
		// Minimum execution time: 23_030 nanoseconds.
		Weight::from_ref_time(23_700_000_u64)
			.saturating_add(T::DbWeight::get().reads(7_u64))
			.saturating_add(T::DbWeight::get().writes(5_u64))
	}
	// Storage: Allocations SessionQuotaRenewSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Allocations NextSessionQuota (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations SessionQuota (r:0 w:1)
	fn renew_quota() -> Weight {
		// Minimum execution time: 19_270 nanoseconds.
		Weight::from_ref_time(19_810_000_u64)
			.saturating_add(T::DbWeight::get().reads(7_u64))
			.saturating_add(T::DbWeight::get().writes(5_u64))
	}
	// Storage: ParachainSystem ValidationData (r:1 w:0)
	// Storage: Allocations SessionQuotaCalculationSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations SessionQuotaRenewSchedule (r:1 w:1)
	// Storage: Allocations SessionQuota (r:0 w:1)
	// Storage: Allocations NextSessionQuota (r:0 w:1)
	fn checked_update_session_quota() -> Weight {
		// Minimum execution time: 34_590 nanoseconds.
		Weight::from_ref_time(35_420_000_u64)
			.saturating_add(T::DbWeight::get().reads(9_u64))
			.saturating_add(T::DbWeight::get().writes(7_u64))
	}
	// Storage: ParachainSystem ValidationData (r:1 w:0)
	// Storage: Allocations MintCurveStartingBlock (r:0 w:1)
	// Storage: Allocations SessionQuotaCalculationSchedule (r:0 w:1)
	// Storage: Allocations SessionQuotaRenewSchedule (r:0 w:1)
	fn set_curve_starting_block() -> Weight {
		// Minimum execution time: 11_190 nanoseconds.
		Weight::from_ref_time(11_680_000_u64)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(3_u64))
	}
}

impl WeightInfo for () {
	// Storage: Allocations SessionQuota (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:1)
	// Storage: System Account (r:3 w:3)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	/// The range of component `b` is `[1, 500]`.
	fn allocate(b: u32, ) -> Weight {
		// Minimum execution time: 91_910 nanoseconds.
		Weight::from_ref_time(43_980_848_u64)
			// Standard Error: 9_014
			.saturating_add(Weight::from_ref_time(27_585_705_u64).saturating_mul(b as u64))
			.saturating_add(RocksDbWeight::get().reads(8_u64))
			.saturating_add(RocksDbWeight::get().reads((1_u64).saturating_mul(b as u64)))
			.saturating_add(RocksDbWeight::get().writes(6_u64))
			.saturating_add(RocksDbWeight::get().writes((1_u64).saturating_mul(b as u64)))
	}
	// Storage: Allocations SessionQuotaCalculationSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations NextSessionQuota (r:0 w:1)
	fn calc_quota() -> Weight {
		// Minimum execution time: 23_030 nanoseconds.
		Weight::from_ref_time(23_700_000_u64)
			.saturating_add(RocksDbWeight::get().reads(7_u64))
			.saturating_add(RocksDbWeight::get().writes(5_u64))
	}
	// Storage: Allocations SessionQuotaRenewSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Allocations NextSessionQuota (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations SessionQuota (r:0 w:1)
	fn renew_quota() -> Weight {
		// Minimum execution time: 19_270 nanoseconds.
		Weight::from_ref_time(19_810_000_u64)
			.saturating_add(RocksDbWeight::get().reads(7_u64))
			.saturating_add(RocksDbWeight::get().writes(5_u64))
	}
	// Storage: ParachainSystem ValidationData (r:1 w:0)
	// Storage: Allocations SessionQuotaCalculationSchedule (r:1 w:1)
	// Storage: Allocations MintCurveStartingBlock (r:1 w:1)
	// Storage: Balances TotalIssuance (r:1 w:0)
	// Storage: System Number (r:1 w:0)
	// Storage: System ExecutionPhase (r:1 w:0)
	// Storage: System EventCount (r:1 w:1)
	// Storage: System Events (r:1 w:1)
	// Storage: Allocations SessionQuotaRenewSchedule (r:1 w:1)
	// Storage: Allocations SessionQuota (r:0 w:1)
	// Storage: Allocations NextSessionQuota (r:0 w:1)
	fn checked_update_session_quota() -> Weight {
		// Minimum execution time: 34_590 nanoseconds.
		Weight::from_ref_time(35_420_000_u64)
			.saturating_add(RocksDbWeight::get().reads(9_u64))
			.saturating_add(RocksDbWeight::get().writes(7_u64))
	}
	// Storage: ParachainSystem ValidationData (r:1 w:0)
	// Storage: Allocations MintCurveStartingBlock (r:0 w:1)
	// Storage: Allocations SessionQuotaCalculationSchedule (r:0 w:1)
	// Storage: Allocations SessionQuotaRenewSchedule (r:0 w:1)
	fn set_curve_starting_block() -> Weight {
		// Minimum execution time: 11_190 nanoseconds.
		Weight::from_ref_time(11_680_000_u64)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
}