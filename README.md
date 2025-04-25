Custom hook useToggle can return both [] or {}:
If return {} then the variable name must be the same when using that hook
e.g: const {state: invisible, toggle} = useToggle();

useQuery tanstack query from v5:
const {
   data,
-  isPreviousData,
+  isPlaceholderData,
} = useQuery({
  queryKey,
  queryFn,
- keepPreviousData: true,
+ placeholderData: keepPreviousData
});