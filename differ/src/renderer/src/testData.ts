const ORIGINAL = `
CREATE OR REPLACE PROCEDURE update_salary (
    p_employee_id IN NUMBER,
    p_percentage  IN NUMBER
) IS
    v_old_salary NUMBER;
    v_new_salary NUMBER;
BEGIN
    SELECT salary
    INTO v_old_salary
    FROM employees
    WHERE employee_id = p_employee_id;

    v_new_salary := v_old_salary + (v_old_salary * p_percentage / 100);

    UPDATE employees
    SET salary = v_new_salary
    WHERE employee_id = p_employee_id;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Salary updated successfully');
END update_salary;
/
`

const MODIFIED = `
CREATE OR REPLACE PROCEDURE update_salary (
    p_employee_id IN NUMBER,
    p_percentage  IN NUMBER
) IS
    v_new_salary NUMBER;
    v_old_salary NUMBER;
    v_log_id     NUMBER;
BEGIN
    -- Fetch current salary
    SELECT salary
    INTO v_old_salary
    FROM employees
    WHERE employee_id = p_employee_id;

    v_new_salary := v_old_salary * (1 + p_percentage / 100);

    INSERT INTO salary_logs (employee_id, old_salary, new_salary)
    VALUES (p_employee_id, v_old_salary, v_new_salary)
    RETURNING id INTO v_log_id;

    UPDATE employees
    SET salary = v_new_salary
    WHERE employee_id = p_employee_id;

    DBMS_OUTPUT.PUT_LINE(
        'Salary updated. Log ID: ' || v_log_id
    );
END update_salary;
/
`

export { ORIGINAL, MODIFIED }
