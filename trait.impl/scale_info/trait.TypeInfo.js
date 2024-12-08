(function() {
    var implementors = Object.fromEntries([["pallet_allocations",[["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_allocations/pallet/enum.Call.html\" title=\"enum pallet_allocations::pallet::Call\">Call</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    BoundedVec&lt;(T::AccountId, &lt;&lt;T as <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_allocations/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_allocations::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance), T::<a class=\"associatedtype\" href=\"pallet_allocations/pallet/trait.Config.html#associatedtype.MaxAllocs\" title=\"type pallet_allocations::pallet::Config::MaxAllocs\">MaxAllocs</a>&gt;: TypeInfo + 'static,\n    BlockNumberFor&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_allocations/pallet/enum.Error.html\" title=\"enum pallet_allocations::pallet::Error\">Error</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_allocations/pallet/enum.Event.html\" title=\"enum pallet_allocations::pallet::Event\">Event</a>&lt;T&gt;<div class=\"where\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_allocations/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_allocations::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"struct\" href=\"pallet_allocations/struct.MintCurve.html\" title=\"struct pallet_allocations::MintCurve\">MintCurve</a>&lt;T&gt;<div class=\"where\">where\n    BlockNumberFor&lt;T&gt;: TypeInfo + 'static,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_allocations/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_allocations::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_allocations/pallet/trait.Config.html\" title=\"trait pallet_allocations::pallet::Config\">Config</a> + TypeInfo + 'static,</div>"]]],["pallet_grants",[["impl TypeInfo for <a class=\"struct\" href=\"pallet_grants/struct.BridgeDetails.html\" title=\"struct pallet_grants::BridgeDetails\">BridgeDetails</a>"],["impl TypeInfo for <a class=\"struct\" href=\"pallet_grants/struct.BridgeId.html\" title=\"struct pallet_grants::BridgeId\">BridgeId</a>"],["impl&lt;BlockNumber, Balance&gt; TypeInfo for <a class=\"struct\" href=\"pallet_grants/struct.VestingSchedule.html\" title=\"struct pallet_grants::VestingSchedule\">VestingSchedule</a>&lt;BlockNumber, Balance&gt;<div class=\"where\">where\n    BlockNumber: TypeInfo + 'static,\n    Balance: TypeInfo + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_grants/pallet/enum.Call.html\" title=\"enum pallet_grants::pallet::Call\">Call</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    &lt;T::Lookup as StaticLookup&gt;::Source: TypeInfo + 'static,\n    <a class=\"type\" href=\"pallet_grants/type.VestingScheduleOf.html\" title=\"type pallet_grants::VestingScheduleOf\">VestingScheduleOf</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_grants/pallet/trait.Config.html\" title=\"trait pallet_grants::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_grants/pallet/enum.Error.html\" title=\"enum pallet_grants::pallet::Error\">Error</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_grants/pallet/enum.Event.html\" title=\"enum pallet_grants::pallet::Event\">Event</a>&lt;T&gt;<div class=\"where\">where\n    T::AccountId: TypeInfo + 'static,\n    <a class=\"type\" href=\"pallet_grants/type.VestingScheduleOf.html\" title=\"type pallet_grants::VestingScheduleOf\">VestingScheduleOf</a>&lt;T&gt;: TypeInfo + 'static,\n    <a class=\"type\" href=\"pallet_grants/type.BalanceOf.html\" title=\"type pallet_grants::BalanceOf\">BalanceOf</a>&lt;T&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"type\" href=\"pallet_grants/type.VestingScheduleOf.html\" title=\"type pallet_grants::VestingScheduleOf\">VestingScheduleOf</a>&lt;T&gt;, T::<a class=\"associatedtype\" href=\"pallet_grants/pallet/trait.Config.html#associatedtype.MaxSchedule\" title=\"type pallet_grants::pallet::Config::MaxSchedule\">MaxSchedule</a>&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_grants/pallet/trait.Config.html\" title=\"trait pallet_grants::pallet::Config\">Config</a> + 'static,</div>"]]],["pallet_mandate",[["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_mandate/pallet/enum.Call.html\" title=\"enum pallet_mandate::pallet::Call\">Call</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_mandate/pallet/trait.Config.html\" title=\"trait pallet_mandate::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_mandate/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type pallet_mandate::pallet::Config::RuntimeCall\">RuntimeCall</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_mandate/pallet/trait.Config.html\" title=\"trait pallet_mandate::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_mandate/pallet/enum.Event.html\" title=\"enum pallet_mandate::pallet::Event\">Event</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_mandate/pallet/trait.Config.html\" title=\"trait pallet_mandate::pallet::Config\">Config</a> + 'static,</div>"]]],["pallet_nodle_uniques",[["impl&lt;T, I&gt; TypeInfo for <a class=\"enum\" href=\"pallet_nodle_uniques/pallet/enum.Call.html\" title=\"enum pallet_nodle_uniques::pallet::Call\">Call</a>&lt;T, I&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T, I)</a>&gt;: TypeInfo + 'static,\n    T::CollectionId: TypeInfo + 'static,\n    &lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: TypeInfo + 'static,\n    T::ItemId: TypeInfo + 'static,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T::ItemId&gt;: TypeInfo + 'static,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::ItemId&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>, T::KeyLimit&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>, T::ValueLimit&gt;: TypeInfo + 'static,\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>, T::StringLimit&gt;: TypeInfo + 'static,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::CollectionId&gt;: TypeInfo + 'static,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"pallet_nodle_uniques/type.BalanceOf.html\" title=\"type pallet_nodle_uniques::BalanceOf\">BalanceOf</a>&lt;T, I&gt;&gt;: TypeInfo + 'static,\n    <a class=\"type\" href=\"pallet_nodle_uniques/type.BalanceOf.html\" title=\"type pallet_nodle_uniques::BalanceOf\">BalanceOf</a>&lt;T, I&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_nodle_uniques/pallet/trait.Config.html\" title=\"trait pallet_nodle_uniques::pallet::Config\">Config</a>&lt;I&gt; + 'static,\n    I: 'static,</div>"],["impl&lt;T, I&gt; TypeInfo for <a class=\"enum\" href=\"pallet_nodle_uniques/pallet/enum.Error.html\" title=\"enum pallet_nodle_uniques::pallet::Error\">Error</a>&lt;T, I&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T, I)</a>&gt;: TypeInfo + 'static,\n    T: 'static,\n    I: 'static,</div>"],["impl&lt;T, I&gt; TypeInfo for <a class=\"enum\" href=\"pallet_nodle_uniques/pallet/enum.Event.html\" title=\"enum pallet_nodle_uniques::pallet::Event\">Event</a>&lt;T, I&gt;<div class=\"where\">where\n    T::CollectionId: TypeInfo + 'static,\n    <a class=\"type\" href=\"pallet_nodle_uniques/type.BalanceOf.html\" title=\"type pallet_nodle_uniques::BalanceOf\">BalanceOf</a>&lt;T, I&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T, I)</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_nodle_uniques/pallet/trait.Config.html\" title=\"trait pallet_nodle_uniques::pallet::Config\">Config</a>&lt;I&gt; + 'static,\n    I: 'static,</div>"]]],["pallet_reserve",[["impl&lt;T, I&gt; TypeInfo for <a class=\"enum\" href=\"pallet_reserve/pallet/enum.Call.html\" title=\"enum pallet_reserve::pallet::Call\">Call</a>&lt;T, I&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T, I)</a>&gt;: TypeInfo + 'static,\n    T::AccountId: TypeInfo + 'static,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_reserve/pallet/trait.Config.html\" title=\"trait pallet_reserve::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_reserve/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_reserve::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_reserve/pallet/trait.Config.html\" title=\"trait pallet_reserve::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_reserve/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type pallet_reserve::pallet::Config::RuntimeCall\">RuntimeCall</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_reserve/pallet/trait.Config.html\" title=\"trait pallet_reserve::pallet::Config\">Config</a>&lt;I&gt; + 'static,\n    I: 'static,</div>"],["impl&lt;T, I&gt; TypeInfo for <a class=\"enum\" href=\"pallet_reserve/pallet/enum.Event.html\" title=\"enum pallet_reserve::pallet::Event\">Event</a>&lt;T, I&gt;<div class=\"where\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_reserve/pallet/trait.Config.html\" title=\"trait pallet_reserve::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_reserve/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_reserve::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    T::AccountId: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T, I)</a>&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_reserve/pallet/trait.Config.html\" title=\"trait pallet_reserve::pallet::Config\">Config</a>&lt;I&gt; + 'static,\n    I: 'static,</div>"]]],["pallet_sponsorship",[["impl&lt;AccountId, Balance&gt; TypeInfo for <a class=\"struct\" href=\"pallet_sponsorship/struct.UserDetails.html\" title=\"struct pallet_sponsorship::UserDetails\">UserDetails</a>&lt;AccountId, Balance&gt;<div class=\"where\">where\n    AccountId: TypeInfo + 'static,\n    LimitedBalance&lt;Balance&gt;: TypeInfo + 'static,\n    Balance: TypeInfo + 'static + Balance,</div>"],["impl&lt;AccountId, SponsorshipType, Balance&gt; TypeInfo for <a class=\"struct\" href=\"pallet_sponsorship/struct.PotDetails.html\" title=\"struct pallet_sponsorship::PotDetails\">PotDetails</a>&lt;AccountId, SponsorshipType, Balance&gt;<div class=\"where\">where\n    AccountId: TypeInfo + 'static,\n    SponsorshipType: TypeInfo + 'static,\n    LimitedBalance&lt;Balance&gt;: TypeInfo + 'static,\n    Balance: TypeInfo + 'static + Balance,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_sponsorship/pallet/enum.Call.html\" title=\"enum pallet_sponsorship::pallet::Call\">Call</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.tuple.html\">(T,)</a>&gt;: TypeInfo + 'static,\n    T::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.PotId\" title=\"type pallet_sponsorship::pallet::Config::PotId\">PotId</a>: TypeInfo + 'static,\n    T::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.SponsorshipType\" title=\"type pallet_sponsorship::pallet::Config::SponsorshipType\">SponsorshipType</a>: TypeInfo + 'static,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_sponsorship::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T::AccountId&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.RuntimeCall\" title=\"type pallet_sponsorship::pallet::Config::RuntimeCall\">RuntimeCall</a>&gt;&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_sponsorship/pallet/enum.Error.html\" title=\"enum pallet_sponsorship::pallet::Error\">Error</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"enum\" href=\"pallet_sponsorship/pallet/enum.Event.html\" title=\"enum pallet_sponsorship::pallet::Event\">Event</a>&lt;T&gt;<div class=\"where\">where\n    T::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.PotId\" title=\"type pallet_sponsorship::pallet::Config::PotId\">PotId</a>: TypeInfo + 'static,\n    T::AccountId: TypeInfo + 'static,\n    T::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.SponsorshipType\" title=\"type pallet_sponsorship::pallet::Config::SponsorshipType\">SponsorshipType</a>: TypeInfo + 'static,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_sponsorship::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T::AccountId&gt;: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a> + 'static,</div>"],["impl&lt;T&gt; TypeInfo for <a class=\"struct\" href=\"pallet_sponsorship/struct.ChargeSponsor.html\" title=\"struct pallet_sponsorship::ChargeSponsor\">ChargeSponsor</a>&lt;T&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_sponsorship/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_sponsorship::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance&gt;: TypeInfo + 'static,\n    T: <a class=\"trait\" href=\"pallet_sponsorship/pallet/trait.Config.html\" title=\"trait pallet_sponsorship::pallet::Config\">Config</a> + 'static,</div>"]]],["runtime_eden",[["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.OriginCaller.html\" title=\"enum runtime_eden::OriginCaller\">OriginCaller</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeCall.html\" title=\"enum runtime_eden::RuntimeCall\">RuntimeCall</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeError.html\" title=\"enum runtime_eden::RuntimeError\">RuntimeError</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeEvent.html\" title=\"enum runtime_eden::RuntimeEvent\">RuntimeEvent</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeFreezeReason.html\" title=\"enum runtime_eden::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeHoldReason.html\" title=\"enum runtime_eden::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeLockId.html\" title=\"enum runtime_eden::RuntimeLockId\">RuntimeLockId</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeSlashReason.html\" title=\"enum runtime_eden::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl TypeInfo for <a class=\"enum\" href=\"runtime_eden/enum.RuntimeTask.html\" title=\"enum runtime_eden::RuntimeTask\">RuntimeTask</a>"],["impl TypeInfo for <a class=\"struct\" href=\"runtime_eden/struct.Runtime.html\" title=\"struct runtime_eden::Runtime\">Runtime</a>"],["impl TypeInfo for <a class=\"struct\" href=\"runtime_eden/struct.SessionKeys.html\" title=\"struct runtime_eden::SessionKeys\">SessionKeys</a>"]]],["support",[["impl&lt;T&gt; TypeInfo for <a class=\"struct\" href=\"support/struct.LimitedBalance.html\" title=\"struct support::LimitedBalance\">LimitedBalance</a>&lt;T&gt;<div class=\"where\">where\n    T: TypeInfo + 'static + Balance,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[3560,3157,1658,4000,2734,6116,1648,248]}