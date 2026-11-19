# Quantum Gates

## Single Qubit Gates

Consider a qubit interacting with an external field described by the Hamiltonian $\hat{H}$. Since $\hat{H}$ is Hermitian, it can be written in the form

$$
\hat{H} = h_0 + \beta \vec{n}\cdot \hat{\vec{\sigma}}
$$

Thus, we know that we can describe the change of state using the time evolution operator $\hat{U}$ as

$$
\hat{U} = e^{i\alpha}\hat{R}_{\vec{n}}(\eta)
$$

where $\alpha = -h_0t/\hbar$ and $\eta = 2 \beta t / \hbar$.

We will be interested in implementing transformations to qubit states using such unitary operators.

A single qubit quantum gate is such a unitary transformation acting on a quantum state

$$
\ket{\psi'} = \hat{U} \ket{\psi}
$$

> [!NOTE]
> We define $a \oplus b = a + b - 2ab$ for $a, b \in \{0, 1\}$ essentially representing the XOR operation on $a$ and $b$.

### X-gate

The X-gate is defined by

$$
\begin{aligned}
\hat{X}\ket{0} &= \ket{1}, \\
\hat{X}\ket{1} &= \ket{0}
\end{aligned}
$$

Thus, $\hat{X} \equiv \hat{\sigma}_x$ and $\hat{X}\ket{a} = \ket{a \oplus 1}$ for $a \in \{0, 1\}$.

It is thus also known as _NOT gate_.

### Y-gate

The Y-gate is defined by

$$
\begin{aligned}
\hat{Y}\ket{0} &= i\ket{1}, \\
\hat{Y}\ket{1} &= -i\ket{0}
\end{aligned}
$$

Thus, $\hat{Y} \equiv \hat{\sigma}_y$ and $\hat{Y}\ket{a} = i(1-2a)\ket{a \oplus 1}$.

### Z-gate

The Z-gate is defined by

$$
\begin{aligned}
\hat{Z}\ket{0} &= \ket{0}, \\
\hat{Z}\ket{1} &= -\ket{1}
\end{aligned}
$$

Thus, $\hat{Z} \equiv \hat{\sigma}_z$ and $\hat{Z}\ket{a} = (1-2a) \ket{a}.$

> [!NOTE]
> The X, Y and Z gates are said to be Pauli gates as they perform the operations equivalent to the Pauli operators.

### T-gate

The T-gate is defined by

$$
\begin{aligned}
\hat{T}\ket{0} &= \ket{0}, \\
\hat{T}\ket{1} &= e^{i\pi/4}\ket{1}
\end{aligned}
$$

Thus, $\hat{T}\ket{a} = e^{ia\pi/4} \ket{a}.$

The operator form is given by

$$
\begin{aligned}
\hat{T} &= \ket{0}\bra{0} + e^{i\pi/4}\ket{1}\bra{1} \\
&= e^{i\pi/8}e^{-i\pi\hat{\sigma}_z/8}
\end{aligned}
$$

Thus, it is also called $\pi/8$-gate.

### S-gate

The S-gate (also called Phase gate) is defined by

$$
\begin{aligned}
\hat{S}\ket{0} &= \ket{0}, \\
\hat{S}\ket{1} &= i \ket{1}
\end{aligned}
$$

Thus, $\hat{S}\ket{a} =  e^{ia\pi/2} \ket{a}$ and $\hat{S} = \hat{T}^2$.

The operator form is given by

$$
\begin{aligned}
\hat{S} &= \ket{0}\bra{0} + i \ket{1}\bra{1} \\
&= e^{i\pi/4}e^{-i\pi\hat{\sigma}_z/4}
\end{aligned}
$$

Thus, it is also called $\pi/4$-gate.

### H-gate

The H-gate (also called Hadamard gate) is defined by

$$
\begin{aligned}
\hat{H}\ket{0} &= \frac{1}{\sqrt{2}} \left(\ket{0} + \ket{1}\right) \\
\hat{H}\ket{1} &= \frac{1}{\sqrt{2}} \left(\ket{0} - \ket{1}\right)
\end{aligned}
$$

Thus,

$$
\hat{H}\ket{a} = \frac{1}{\sqrt{2}} \sum_{b=0, 1} (-1)^{ab} \ket{{b}}
$$

The operator form is given by

$$
\begin{aligned}
\hat{H} &= \frac{1}{\sqrt{2}} \left(\hat{\sigma}_x + \hat{\sigma}_z \right) \\
&= ie^{-i\pi (\hat{\sigma}_x + \hat{\sigma}_z)/2 \sqrt{2}}
\end{aligned}
$$

Thus, we also get

$$
\hat{H}^2 = I
$$

## Arbitrary Single-Qubit Gate

We can express any arbitrary single qubit gate using a small set of gates which are referred to as universal gates.

Up to a global phase, an arbitrary unitary can be represented as $\hat{R}_{\vec{n}}(\eta)$ . Now, we know

$$
\hat{R}_{\vec{n}}(\eta) = e^{-i \eta (\vec{n}\cdot \hat{\vec{\sigma}})/2}
$$

Consider $\eta = 2\pi/p$. Thus,

$$
{\hat{R}_{\vec{n}}\left(\frac{2\pi}{p}\right)}^N = \hat{R}_{\vec{n}}\left(\frac{2N\pi}{p}\right)
$$

where $N$ is an integer.

If $p$ is a positive integer, then for $N = 1, 2, \dots p-1, p$, we obtain a set of possible values. At $N= p$, we have $2\pi$. For $N \gt p$, same angles are generated again. Hence, for integral values of $p$, only ceertain values can be generated.

But now if $p$ is an irrational multiple of $\pi$, then $2N\pi/p \neq 2\pi$ for any $q$ and hence every application of $\hat{R}_{\vec{n}}\left(2\pi/p\right)$ generates new angle without repetition.

It can be shown that one can always find an $N$ such that $2N\pi \approx \theta$ within any desired accuracy. Consequently, $N$ $\hat{R}_{\vec{n}}\left(2\pi/p\right)$ gates can realize $\hat{R}_{\vec{n}}(\eta)$ within any desired degree of accuracy. (Refer [Multi-rotations on the unit circle by Han Yu](https://doi.org/10.1016/j.jnt.2018.12.008.))

### Arbitrary rotation about a fixed axis

We find

$$
\hat{T} \hat{H} = \frac{e^{i\pi/8}}{\sqrt{2}} \left(-i sin(\pi/8) + sin(\pi/8)\hat{\sigma}_y + cos(\pi/8)(\hat{\sigma}_x + \hat{\sigma}_z)\right)
$$

On multiplying above with $\hat{H}$ and simplifying, we get

$$
\hat{H} \hat{T} \hat{H} = e^{i\pi/8} e^{-i\pi\hat{\sigma}_z/8}
$$

On multiplying by $\hat{T}$ and choosing $\eta$ such that $\cos(\eta/2) = \cos^2(\pi/8)$, we get

$$
\hat{T}\hat{H}\hat{T}\hat{H} = e^{i\pi/4}\{\cos(\eta/2)I - i \sin(\eta/2)\vec{p}\cdot \hat{\vec{\sigma}}\}
\equiv \hat{R}_{\vec{p}}(\eta)$$

where

$$

\vec{p} = \frac{1}{\sqrt{1 + \cos^2 (\pi/8)}}\left[\cos(\pi/8) \vec{e_x} + \sin(\pi/8) \vec{e_y} + \cos(\pi/8) \vec{e_z}\right]

$$

Similarly, we obtain

$$

\hat{H}\hat{T}\hat{H}\hat{T} \equiv \hat{R}_{\vec{q}}(\eta)

$$

where

$$

\vec{q} = \frac{1}{\sqrt{1 + \cos^2(\pi/8)}} \left[\cos(\pi/8) \vec{e_x} - \sin(\pi/8) \vec{e_y} + cos(\pi/8) \vec{e_z} \right]

$$


Now, since $\hat{H}^2 = I$, we can write

$$

\hat{H}\hat{T}\hat{H}\hat{T} = \hat{H}\hat{T}\hat{H}\hat{T}\hat{H}^2 = \hat{H}(\hat{T}\hat{H}\hat{T}\hat{H}) \hat{H}

$$

Thus, we have

$$

\hat{R}_{\vec{q}}(\eta) = \hat{H}\hat{R}_{\vec{p}}(\eta) \hat{H}

$$

These show that one can implement rotation by an arbitrary angle $\theta$ about a fixed axis.

### Arbitrary rotation about an arbitrary axis

> [!IMPORTANT] Theorem
> The unitary operator $\hat{R}_{\vec{n}}(\theta)$
> where $\vec{n}, \theta$ are arbitrary, can be expressed as
>
> $$
> \hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{a}}(\alpha) \hat{R}_{\vec{b}}(\beta) \hat{R}_{\vec{a}}(\gamma)
> $$

Here, we choose $\vec{a} = \vec{p}$ and $\vec{b} = \vec{q}$ and thus, we have

$$

\hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{p}}(\alpha) \hat{R}_{\vec{q}}(\beta) \hat{R}_{\vec{p}}(\gamma)

$$

Assume that desired accuracy for rotation operators above is achieved by $\alpha \approx (n_1 \eta) \mod 2\pi, \beta \approx (n_2 \eta) \mod 2\pi$ and $\gamma \approx (n_3 \eta) \mod 2\pi$, we have

$$

\hat{R}_{\vec{p}}(\alpha) \approx \hat{R}_{\vec{p}}^{n_1} (\eta), \quad \hat{R}_{\vec{q}}(\beta) \approx \hat{R}_{\vec{q}}^{n_2} (\eta), \quad \hat{R}_{\vec{p}}(\gamma) \approx \hat{R}_{\vec{p}}^{n_3} (\eta)

$$

where $\eta$ is such that $\cos (\eta/2) = \cos^2 (\pi/8)$ as showed earlier

Since we know $\hat{H}^2 = I$, we get

$$

\hat{R}_{\vec{q}}(\beta) = \hat{H} \hat{R}_{\vec{p}}^{n_2} (\eta) \hat{H}

$$

Thus, we get

$$

\hat{R}_{\vec{n}}(\theta) = \hat{R}_{\vec{p}}^{n_1}(\eta) \hat{H} \hat{R}_{\vec{p}}^{n_2}(\eta) \hat{H}\hat{R}_{\vec{p}}^{n_3}(\eta)

$$

Thus, in this way, one can represent any arbitrary single qubit gate which performs rotation by an arbitrary angle $\theta$ along an arbitrary axis $\eta$.

Also, this is why $T$ and $H$ are referred to as universal gates.

## Multi-Qubit Controlled Gates

Let $\ket{a, b}$ denote the combined state of two qubits in which first qubit is in the state $\ket{a}$ and the second in the state $\ket{b}$.

A controlled-U gate is defined by

$$

\begin{aligned}
C_U \ket{0, b} &= \ket{0, b} \\
C_U \ket{1, b} &= \hat{U}_2 \ket{1, b}
\end{aligned}

$$

Thus,

$$

C_U \ket{a, b} = \hat{U}^a_2 \ket{a, b}

$$

The subscript in the notation $\hat{U}^a_2$ means that the operator acts on the second qubit, thus called the target qubit whereas superscript is the first qubit which controls the operation of the second qubit and is thus called the control qubit.

### Realizing a controlled-U gate

Note that

$$

\frac{1}{2} (1 - \hat{\sigma}_z) \ket{0} = 0, \quad \frac{1}{2} (1 - \hat{\sigma}_z) \ket{1} = \ket{1}

$$

Thus,

$$

\frac{1}{2} (1 - \hat{\sigma}_z) \ket{a} = a \ket{a}

$$
where $a \in \{0, 1\}$.

So, for any function $f$,

$$

f\left[\frac{1}{2} (1 - \hat{\sigma}_z)\right] \ket{a} = f(a) \ket{a}

$$

Thus,

$$

\hat{U}_2^a \ket{a, b} = \hat{U}_2^{(1-\hat{\sigma}_z^{(1)})/2} \ket{a, b}

$$

Now, apart from a phase factor, we can write

$$

\hat{U}_2 = e^{-i\eta \vec{n}\cdot \hat{\vec{\sigma}}^{(2)}/2}

$$

Thus, we see that

$$

C_U = e^{-i\eta(\vec{n}\cdot \hat{\vec{\sigma}}^{(2)})(1-\hat{\sigma}_z^{(1)})/4}

$$

The unitary operator in the equation above is generated by the Hamiltonian of the form

$$

\hat{H} \sim (\vec{n}\cdot \hat{\vec{\sigma}}^{(2)})(1 - \hat{\sigma}_z^{(1)}).

$$

This involves interaction between one component of one spin with three components of other. The relative strength of interacvtion depends on the orientation of the second spin sought by the desired unitary operation. This makes it challenging for making $C_U$ gate as the interaction between spins can not be generated by externally applied forces, particularly for arbitrary $\vec{n}$.

### CNOT gate

It corresponds to $\hat{U} = \hat{X} = \hat{\sigma}_x$. Therefore, we have

$$

C_X \ket{a, b} = \hat{X}_2^a \ket{a, b} = \ket{a, b \oplus a}

$$

It can also be used to reduce higher number of controlling qubits to a combination of one qubit control gate operations.

```text
|a⟩ ─────●───── |a⟩
         │
|b⟩ ─────⊕───── |a ⊕ b⟩
```

### Reduction of $n$-control Qubit Gates

In logic operations, higher number of control qubits for the target qubit might be required. Consider a two control qubit gate reprpesented by $C_U^2$. Let the initial state of the three qubits be $\ket{a, b, c}$. The action of $C_U^2$ is captured by the equation

$$

C_U^2 \ket{a, b, c} = \hat{U}^{ab}_3 \ket{a, b, c}

$$

where the subscript on $\hat{U}_3$ indicates that the $\hat{U}$ acts on third qubit.

Now, we know

$$

a \oplus b = a + b - 2ab

$$

Thus,

$$

\hat{U}^{ab} = \hat{U}^{(a + b - a \oplus b)/2} = \hat{V}^a \hat{V}^{-(a \oplus b)} \hat{V}^b = \hat{V}^a \hat{V}^{{\dagger}{(a \oplus b)}} \hat{V}^b

$$

where we have invoked the fact that $\hat{V}$, defined below, is unitary so that $\hat{V}^{\dagger} = \hat{V}^{-1}$,

where

$$

\hat{V} = \hat{U}^{1/2}

$$

Thus, we get

$$

C_U^{(2)} \ket{a, b, c} = \hat{V}^a \hat{V}^{\dagger (a \oplus b)} \hat{V}^{b}

$$

```text
q₁ ───────●────────────●────────●──────
          │            │        │
q₂ ───●───⊕───────●────⊕────────│──────
      │           │             │
q₃ ───V──────────V†────────────V───────
```

Same considerations can be applied to the gate $C^n_U$ in which the target qubit is acted upon by the unitary U only when all the $n$ control qubits are in the state $\ket{1}$ while leaving the state of the control qubit unchanged.

### ABC Theorem

> [!IMPORTANT] ABC Theorem
> Any controlled unitary gate can be performed using a combination of CNOT and single qubit gates.
> such that
>
> $$
> \hat{U}^a = \hat{A} \hat{X}^a \hat{B} \hat{X}^b \hat{C}
> $$
>
> where $\hat{A} \hat{B} \hat{C} = I$, and $\ket{a}$ is the state of the control qubit.

### Equivalence of controlled-U with CNOT and Single Qubit Gates

Consider the controlled-U gate which implements $\hat{U}$. Thus, its action of target qubit when the control qubit is in state $\ket{a}$ is be given by

$$

\hat{U}^a = e^{ia\alpha} \hat{R}^a_{\vec{n}}(\eta), \quad a \in \{0, 1\}

$$

where

$$

\hat{R}_{\vec{n}}(\eta) = \cos(\eta/2)I - i \sin (\eta/2) \vec{n} \cdot \hat{\vec{\sigma}}

$$


Now, consider two  unit vectors $\vec{a}$ and $\vec{b}$. Using $[\vec{a}\cdot\hat{\vec{\sigma}}, \vec{b}\cdot\hat{\vec{\sigma}}] = 2i(\vec{a} \times \vec{b})\cdot \hat{\vec{\sigma}}$ and $\{\vec{a}\cdot\hat{\vec{\sigma}}, \vec{b}\cdot\hat{\vec{\sigma}}\} = 2 \vec{a}\cdot\vec{b}$, we get

$$

(\vec{a}\cdot \hat{\vec{\sigma}})(\vec{b}\cdot \hat{\vec{\sigma}}) = (\vec{a}\cdot \vec{b})I - i (\vec{b} \times \vec{a})\cdot \hat{\vec{\sigma}}

$$

Thus, we can write

$$

\hat{R}_{\vec{n}}(\eta) = (\vec{a}\cdot \hat{\vec{\sigma}})(\vec{b}\cdot \hat{\vec{\sigma}})

$$

where $\vec{a}\cdot \vec{b} = \cos (\eta/2)$ and $\vec{b}\times \vec{a} = \sin (\eta/2) \vec{n}$.

From this, we know $\vec{n} \perp \vec{a}, \vec{b}$.

Now, consider the azimuthal and polar unit vectors, collectively referred to as the tangent vectors to the sphere, given by

$$

\vec{e_\phi} = - \sin(\phi) \vec{e_x} + \cos (\phi) \vec{e_y}

$$

and

$$

\vec{e_\theta} = \cos (\theta) \cos (\phi) \vec{e_x} + \cos (\theta) \sin (\phi) \vec{e_y} - \sin (\theta) \vec{e_z}

$$

We know position vector of a point on the Bloch sphere is given by

$$

\vec{n} = \sin (\theta) \cos (\\phi) \vec{e_x} + \sin (\theta) \sin (\phi) \vec{e_y} + \cos (\theta) \vec{e_z}

$$

A few notable properties of these three vectors are as follows:
1. $\vec{n}\cdot \vec{e_\theta} = \vec{n}\cdot \vec{e_\phi} = \vec{e_\theta}\cdot \vec{e_\phi}$
2. $\vec{n}\times \vec{e_\theta} = \vec{e_\phi}, \vec{e_\theta}\times\vec{e_\phi} = \vec{n}, \vec{e_\phi}\times\vec{n} = \vec{e_\theta}$

Now, since we know $\vec{a}, \vec{b} \perp \vec{n}$, we can express

$$

\vec{a} = \alpha_{\theta} \vec{e_\theta} + \alpha_{\phi} \vec{e_\phi}

$$

and

$$

\vec{b} = \beta_{\theta} \vec{e_\theta} + \alpha_{\phi} \vec{e_\theta}

$$

Now, we want $\vec{a}\cdot \vec{b} = \cos (\eta/2)$ and $\vec{b}\times \vec{a} = \sin (\eta/2) \vec{n}$.

Hence, we usually choose

$$

\vec{a} = \vec{e_\phi}, \quad \vec{b} = \cos \left(\frac{\eta}{2} \right) \vec{e_\phi} + \sin \left(\frac{\eta}{2}\right) \vec{e_\theta}

$$

though there could be many other possible solutions (which might need to be considered in some cases depending on the controlled-U gate).

Now, we claim that we can express

$$

\vec{a}\cdot \hat{\vec{\sigma}} = \hat{V} \hat{\sigma_x} \hat{V}^{\dagger}

$$

and

$$

\vec{b} \cdot \hat{\vec{\sigma}} = \hat{W} \hat{\sigma}_x \hat{W}^{\dagger}

$$

where

$$

\hat{V} = e^{-i\alpha {\hat{\sigma}_z}/2}, \quad \alpha = \phi + \frac{\pi}{2}

$$

and

$$

\hat{W} = \hat{D}\hat{V}, \quad \hat{D} = e^{i\eta (\vec{n}\cdot \hat{\vec{\sigma}})/4}

$$

To show, this let's first consider

$$

\hat{A} = e^{-i\alpha (\vec{m}\cdot \hat{\vec{\sigma}})} (\vec{p}\cdot \hat{\vec{\sigma}}) e^{i \alpha(\vec{m}\cdot \hat{\vec{\sigma}})}

$$

where $\vec{m}$ and $\vec{p}$ are unit vectors such that $\vec{m}\cdot \vec{p} = 0$, and $\alpha \in [0, 2\pi)$.

Thus,

$$

\frac{d\hat{A}}{d\alpha} = e^{-i\alpha (\vec{m}\cdot \hat{\vec{\sigma}})} (\vec{m} \times \vec{p})\cdot \hat{\vec{\sigma}} e^{i\alpha {\vec{m}\cdot \hat{\vec{\sigma}}}}

$$

Let the above expression be denoted by $\hat{B}$. Since $\vec{m}\cdot \vec{p} = 0$,

$$

\frac{d\hat{B}}{d\alpha} = -\hat{A}

$$

Thus,

$$

\frac{d^2 \hat{A}}{d\alpha^2} = -\hat{A}

$$

Now, $\hat{A}(0) = (\vec{p}\cdot\hat{\vec{\sigma}})$. Also, $\hat{B}(0) = (\vec{m} \times \vec{p})\cdot \hat{\vec{\sigma}}$

Thus, we get

$$

\hat{A}(\alpha) = \cos (\alpha) (\vec{p}\cdot \hat{\vec{\sigma}}) + \sin (\alpha) (\vec{m} \times \vec{p})\cdot \hat{\vec{\sigma}}

$$

So, we have

$$

e^{-i\alpha (\vec{m}\cdot \hat{\vec{\sigma}})} (\vec{p}\cdot \hat{\vec{\sigma}}) e^{i \alpha(\vec{m}\cdot \hat{\vec{\sigma}})} = \cos (\alpha) (\vec{p}\cdot \hat{\vec{\sigma}}) + \sin (\alpha) (\vec{m} \times \vec{p})\cdot \hat{\vec{\sigma}}

$$

Now, coming back to $\vec{a} \cdot \hat{\vec{\sigma}}$, since $\vec{a} = \vec{e_\phi}$, we get

$$

\vec{a}\cdot \hat{\vec{\sigma}} = \cos \left(\phi + \frac{\pi}{2}\right) \hat{\sigma}_x + \sin \left(\phi + \frac{\pi}{2} \right) \hat{\sigma_y}

$$

Thus, we get

$$

\vec{a}\cdot \hat{\vec{\sigma}} = \hat{V} \hat{\sigma}_x \hat{V}^{\dagger}

$$

where $\hat{V} = e^{-i\alpha {\hat{\sigma}_z}/2}, \quad \alpha = \phi + \pi/2$.

Similarly, we get

$$

\vec{b}\cdot \hat{\vec{\sigma}} = \cos \left(\frac{\eta}{2}\right) \vec{e_\phi}\cdot\hat{\vec{\sigma}} + \sin \left(\frac{\eta}{2} \right) (\vec{e_\theta}\cdot\hat{\vec{\sigma}})

$$

Thus,

$$

\vec{b}\cdot \hat{\vec{\sigma}} = \hat{D} \hat{V} \hat{\sigma}_x \hat{V}^{\dagger} \hat{D}^{\dagger} = \hat{W}\hat{\sigma}_x\hat{W}^{\dagger}

$$

where $\hat{W} = \hat{D}\hat{V}, \quad \hat{D} = e^{i\eta (\vec{n}\cdot \hat{\vec{\sigma}})/4}$.

Thus,

$$

\hat{R}_{\vec{n}}(\eta) = (\hat{V}\hat{\sigma}_x\hat{V}^{\dagger})(\hat{D}\hat{V})\hat{\sigma}_x (\hat{V}^{\dagger} \hat{D}^{\dagger}) = \hat{A} \hat{\sigma}_x \hat{B} \hat{\sigma}_x \hat{C}

$$

where $\hat{A} = \hat{V}$, $\hat{B} = \hat{V}^{\dagger} \hat{D} \hat{V}$, $\hat{C} = \hat{V}^{\dagger} \hat{D}^{\dagger}$.

$\hat{B}$ can be expressed as

$$

\hat{B} = e^{-i \eta/4 [\sin(\theta) \hat{\sigma}_y - \cos (\theta) \hat{\sigma}_z]}

$$

### Controlled Phase Gate

When a superposition state is passed as an input, a phase difference could be created in a controlled-U gate. Thus, we consider $e^{i\alpha a}$ where $\ket{a}$ is the state of the control qubit.

$$

e^{i\alpha a} \ket{a} = e^{i\alpha (1 - \hat{\sigma}_z^{(1)})/2}\ket{a}

$$

where $e^{i\alpha/2}$ can be ignored since a global phase factor (which too can be applied if required).

If global phase factor is ignored,

$$

e^{i\alpha a} \ket{a} \equiv \hat{R}_{\vec{e_z}}(\alpha)

$$

## No-Cloning Theorem

Suppose an unknown state $\ket{\psi}$ is given and $\ket{s}$ is a blank state that we want to turn into a copy of $\ket{\psi}$.

Assume there exists a unitary cloning operator $\hat{U}$ such that

$$

\hat{U} \ket{\psi}\ket{s} = \ket{\psi}\ket{\psi}

$$

Since the state is unknown, the same cloning operation must work for any other state $\ket{\phi}$, so

$$

\hat{U}\ket{\phi}\ket{s} = \ket{\phi}\ket{\phi}

$$

On taking the inner product of the two equations and using the fact that $\hat{U}$ is unitary, we have

$$

\boxed{\braket{\phi | \psi} = \braket{\phi | \psi}^2}

$$

So,

$$

\braket{\phi | \psi} = 0 \text{ or } \braket{\phi | \psi} = 1

$$

For the first one to be true, the states need to be orthogonal whereas for the latter, the two must be same states up to physically irrelevant phase. But arbitrary quantum states need not be orthogonal or identical.

Therefore, an arbitrary unknown quantum state cannot be perfectly cloned.
$$
