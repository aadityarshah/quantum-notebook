# Qubit Algebra

## Qubit States

We have established that any arbitrary state of a qubit can be represented by

$$
\ket{\psi} = \alpha \ket{0} + \beta \ket{1}
$$

where $\alpha, \beta$ are probability amplitudes and $|\alpha|^2$, $|\beta|^2$ give the probability corresponding to the occurrence of the outcomes $0$ and $1$ respectively.

$\ket{0}$ and $\ket{1}$ are chosen so as to form an orthonormal basis and hence, we have

$$
\braket{0 | 1} = \braket{1 | 0} = 0
$$

Properties of a qubit state $\ket{\psi}$ are

1. $\braket{\psi | \psi} = 1 \implies |\alpha|^2 + |\beta|^2 = 1$.
2. A global phase factor $e^{i\theta}$ is physically irrelevant.

Any qubit state can also be represented in terms of two real parameters, $\theta$ and $\phi$

$$
\ket{\psi} \equiv \ket{\theta, \phi} = \cos\left(\frac{\theta}{2}\right) \ket{0} + e^{i \phi} \sin\left(\frac{\theta}{2}\right) \ket{1}
$$

where $0 \leq \theta \leq \pi$ and $0 \leq \phi \lt 2 \pi$.

## Operators

### Operator action on qubits

An operator $\hat{A}$ acts on a state vector in Hilbert space to give another state vector in the Hilbert space. This is represented by

$$
\hat{A} \ket{\psi} =\ket{\phi}
$$

where $\ket{\phi}$ is another vector in the Hilbert space which might not be normalized.

### Completeness Relation

For the chosen orthonormal basis, we obtain the completeness relation

$$
\ket{0}\bra{0} + \ket{1} \bra{1} = I
$$

### Operators as Matrices

We have chosen the orthonormal basis $\ket{0}$ and $\ket{1}$ where the coordinate representation of the vectors is given by

$$
\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix},  \quad \ket{1} = \begin{pmatrix} 0 \\ 1\end{pmatrix}
$$

Now, from this, we also have

$$
\bra{0} = \begin{pmatrix} 1 & 0 \end{pmatrix},  \quad \bra{1} = \begin{pmatrix} 0 & 1\end{pmatrix}
$$

Also, a general state can be denoted by

$$
\ket{\psi} \equiv \begin{pmatrix} \alpha \\ \beta \end{pmatrix}
$$

Now, suppose the operator $\hat{A}$ acts on the basis states,

$$
\hat{A} \ket{0} = a_{00} \ket{0} + a_{10} \ket{1}
$$

$$
\hat{A} \ket{1} = a_{01} \ket{0} + a_{11} \ket{1}
$$

Now, apply the operator to an arbitrary state and observe that the output state is given by

$$
\hat{A} \ket{\psi} = \begin{pmatrix} a_{00} \alpha + a_{01} \beta \\ a_{10} \alpha + a_{11} \beta \end{pmatrix}
$$

and the coordinates could be broken down into

$$
\begin{pmatrix} a_{00} & a_{01} \\ a_{10} & a_{11} \end{pmatrix} \begin{pmatrix} \alpha \\ \beta \end{pmatrix}
$$

Thus, we define the matrix representation of the corresponding operator as

$$
[\hat{A}] = \begin{pmatrix} a_{00} & a_{01} \\ a_{10} & a_{11} \end{pmatrix}
$$

It shall be noted that the outer product $\ket{j} \bra{k}$, where $j, k \in \{0, 1\}$ is an operator, which in the chosen basis gives a 2 x 2 matrix. This motivates the notations and the further developments of Pauli matrices.

### Commutators

We define a commutator $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A}$ and if $[\hat{A}, \hat{B}] = 0$, we say $\hat{A}$ and $\hat{B}$ commute.

We define an anticommutator by $\{\hat{A}, \hat{B}\} = \hat{A}\hat{B} + \hat{B}\hat{A}$.

### Adjoint of an Operator

If $\hat{A}$ is a linear operator on a Hilbert space $\mathcal{H}$. Its adjoint $\hat{A}^{\dagger}$ is defined as the unique operator satisfying

$$
\braket{\phi | \hat{A} \psi} = \braket{\hat{A} ^ {\dagger} \phi | \psi}
$$

for all $\ket{\phi}, \ket{\psi} \in \mathcal{H}$.

After choosing an orthonormal basis and obtaining matrix representation, the adjoint of an operator is given by the conjugate transpose of the matrix representation of the operator.

### Operator in Terms of Its Eigenvalues

Consider an operator $\hat{A}$ and its eigenvalues are represented by $\lambda_i$, then we know $\hat{A}\ket{\lambda_i} = \lambda_i \ket{\lambda_i}$. From this, we can derive

$$
f(\hat{A})\ket{\lambda_i} = f(\lambda_i) \ket{\lambda_i}
$$

whenever function $f(\hat{A})$ is well-defined.

And if the eigenvectors $\{\ket{\lambda_i\}}$ form a complete orthonormal eigenbasis, which is guaranteed when $\hat{A}$ is a normal operator (in finite dimensions), then we get

$$
f(\hat{A}) = \sum_i f(\lambda_i) \ket{\lambda_i} \bra{\lambda_i}
$$

For a degenerate eigenvalue, the eigenvalue equation determines an eigenspace rather than a unique eigenvector. Any orthonormal basis of the corresponding eigenspace may be chosen as part of the eigenbasis.

### Pauli Matrices

We define

$$
\begin{aligned}
\hat{\sigma}_+ &:= \ket{0}\bra{1} \\
\hat{\sigma}_- &:= \ket{1}\bra{0} \\
\hat{\sigma}_z &:= \ket{0}\bra{0} - \ket{1}\bra{1}
\end{aligned}
$$

and we know that

$$
I = \ket{0}\bra{0} + \ket{1}\bra{1}
$$

Effect of all these operators on any arbitrary state can be determined primarily using orthonormality.

Thus, we obtain the following properties

1. ${\hat{\sigma}_+}^2 \equiv  {\hat{\sigma}_-}^2 \equiv 0$, ${\hat{\sigma}_z}^2 = I$
2. ${\hat{\sigma}_+}^{\dagger} = \hat{\sigma}_-$, ${\hat{\sigma}_-}^{\dagger} = \hat{\sigma}_+$, ${\hat{\sigma}_z}^{\dagger} = \hat{\sigma}_z$
3. $[\hat{\sigma}_+, \hat{\sigma}_-] = \hat{\sigma}_z$, $[\hat{\sigma}_z, \hat{\sigma}_{\pm}] = \pm 2 \hat{\sigma}_{\pm}$,
4. $\{\hat{\sigma}_+, \hat{\sigma}_- \} = I$, $\{\hat{\sigma}_x, \hat{\sigma}_y \} = 0$

Observe that $\hat{\sigma}_{\pm}$ are not Hermitian. Thus, we define

$$
\hat{\sigma}_x = \hat{\sigma}_+  +\hat{\sigma}_-
$$

$$
\hat{\sigma}_y = -i(\hat{\sigma}_+ - \hat{\sigma}_-)
$$

Notice that ${\hat{\sigma}_x}^{\dagger} = \hat{\sigma}_x$, and ${\hat{\sigma}_y}^{\dagger} = \hat{\sigma}_y$

Thus, we obtain the following properties:

1. $\hat{\sigma}_x^2 = \hat{\sigma}_y^2 = \hat{\sigma}_z^2 = I$
2. $\hat{\sigma}_x \hat{\sigma}_y = i \hat{\sigma}_z, \hat{\sigma}_z \hat{\sigma}_x = i \hat{\sigma}_y, \hat{\sigma}_y \hat{\sigma}_z = i \hat{\sigma}_x$
3. $[\hat{\sigma}_x, \hat{\sigma}_y] = 2i \hat{\sigma}_z$, $[ \hat{\sigma}_y, \hat{\sigma}_z ] = 2i \hat{\sigma}_x$, $[\hat{\sigma}_z, \hat{\sigma}_x ] = 2i \hat{\sigma}_y$
4. $\{\hat{\sigma}_x, \hat{\sigma}_y \} = 0, \{\hat{\sigma}_y, \hat{\sigma}_z \} = 0, \{\hat{\sigma}_z, \hat{\sigma}_x \} = 0$

The matrices $\hat{\sigma}_x$, $\hat{\sigma}_y$ and $\hat{\sigma}_z$ are called _Pauli Matrices_.

## Pauli Operator

Any operator $\hat{A}$ can be represented as

$$
\hat{A} = a_0 I + a_x \hat{\sigma}_x + a_y \hat{\sigma}_y + a_z \hat{\sigma}_z
$$

where $a_0, a_x, a_y, a_z \in \mathbb{C}$.

So,

$$
\hat{A} = a_0 I + \vec{a}\cdot\hat{\vec{\sigma}}
$$

For $\hat{A}$ to be Hermitian, $a_0, a_x, a_y, a_z \in \mathbb{R}$. So, if $\hat{A}$ is Hermitian,

$$
\hat{A} = a_0 I + |\vec{a}| \vec{n}\cdot\hat{\vec{\sigma}}
$$

where $\vec{a} = a_x \vec{e_x} + a_y \vec{e_y} + a_z \vec{e_z}$ and $\hat{\vec{\sigma}} = \hat{\sigma}_x \vec{e_x} + \hat{\sigma}_y \vec{e_y} + \hat{\sigma}_z \vec{e_z}$, $\vec{n} = \vec{a}/|\vec{a}|$ where $\vec{n}$ is a unit vector and $|\vec{a}|$ is the magnitude of the vector $\vec{a}$.

Thus, we have

$$
\vec{n}\cdot\hat{\vec{\sigma}} = n_x \hat{\sigma_x} + n_y \hat{\sigma_y} + n_z \hat{\sigma_z}
$$

We will refer to the above scalar product as the _Pauli operator_, which can be interpreted as the projection of the _Pauli operator vector_ $\hat{\vec{\sigma}}$ along an arbitrary spatial direction $\vec{n}$.

Squaring and using anticommutation relation, we obtain

$$
\left(\vec{n}\cdot\hat{\vec{\sigma}}\right)^2 = I.
$$

since $\vec{n}$ is a unit vector.

Note that we can write $\vec{n}$ as follows

$$
\vec{n} = \sin \theta \cos \phi \vec{e_x} + \sin \theta \sin \phi \vec{e_y} + \cos \theta \vec{e_z}
$$

### Properties of the Pauli Operator Vector

Pauli operator vector $\hat{\vec{\sigma}}$ is given by

$$
\hat{\vec{\sigma}} = \hat{\sigma}_x \vec{e_x} + \hat{\sigma}_y \vec{e_y} + \hat{\sigma}_z \vec{e_z}
$$

One can show

1. $[\vec{a}\cdot \hat{\vec{\sigma}}, \vec{b}\cdot \hat{\vec{\sigma}}] = 2i (\vec{a} \times \vec{b})\cdot \hat{\vec{\sigma}}$
2. $\{\vec{a} \cdot \hat{\vec{\sigma}}, \vec{b}\cdot \hat{\vec{\sigma}}\} = 2 (\vec{a}\cdot \vec{b}) I$

where $\vec{a}$ and $\vec{b}$ are two vectors.

### Eigenvalues of the Pauli Operator

We know

$$
\left(\vec{n}\cdot\hat{\vec{\sigma}}\right)^2 = I.
$$

Now suppose $\ket{\psi}$ is an eigenstate, then we have

$$
(\vec{n}\cdot \hat{\vec{\sigma}}) \ket{\psi} = \lambda \ket{\psi}
$$

Apply the operator again, we obtain

$$
\ket{\psi} = \lambda^2 \ket{\psi}
$$

Thus, $\lambda = \pm 1$.

The corresponding eigenvectors denoted by $\ket{\vec{n}}$ and $\ket{-\vec{n}}$ can be found and turn out to be

$$
\ket{\vec{n}} \equiv \ket{\theta, \phi} =  \cos \left(\frac{\theta}{2} \right)\ket{0} +  e^{i \phi} \sin\left(\frac{\theta}{2}\right) \ket{1}
$$

and

$$
\ket{-\vec{n}} =  \sin\left(\frac{\theta}{2}\right) \ket{0} - e^{i \phi} \cos \left(\frac{\theta}{2} \right)\ket{1}
$$

if $\vec{n} = \sin \theta \cos \phi \vec{e_x} + \sin \theta \sin \phi \vec{e_y} + \cos \theta \vec{e_z}$.

Such notation is used for eigenstates since they are dependent on $\vec{n}$.

The eigenstate $\ket{-\vec{n}}$ can be obtained from $\ket{\vec{n}}$ by rotating $\vec{n}$ such that $\phi \to \phi + \pi$ and $\theta \to \pi - \theta$ and thus, $\ket{-\vec{n}} \equiv \ket{\pi - \theta, \phi + \pi}$

From completeness, we have

$$
I = \ket{\vec{n}}\bra{\vec{n}} + \ket{-\vec{n}} \bra{-\vec{n}}
$$

Also, expressing $\vec{n} \cdot \hat{\vec{\sigma}}$ in terms of its eigenstates and eigenvalues, we have

$$
\vec{n} \cdot \hat{\vec{\sigma}} = \ket{\vec{n}}\bra{\vec{n}} - \ket{-\vec{n}} \bra{-\vec{n}}
$$

Note that the eigenstates $\ket{\vec{n}}$ and $\ket{-\vec{n}}$ are also sometimes represented by $\ket{0, \vec{n}}$ and $\ket{1, \vec{n}}$ respectively.

### Function of Pauli Operator

Consider a function of the Pauli operator denoted by $f(\vec{n} \cdot \hat{\vec{\sigma}})$. We know that eigenvalues of the Pauli operator are $\pm 1$.

Thus,

$$
f(\vec{n} \cdot \hat{\vec{\sigma}}) \ket{\vec{n}} = f(1) \ket{\vec{n}}
$$

and

$$
f(\vec{n} \cdot \hat{\vec{\sigma}}) \ket{-\vec{n}} = f(-1) \ket{-\vec{n}}
$$

Also, since the operator has two eigenvalues, it can be expressed as a linear combination of I and Pauli operator, thus

$$
f(\vec{n}\cdot \hat{\vec{\sigma}}) = AI + B \vec{n}\cdot \hat{\vec{\sigma}}
$$

Now, using the eigenstate equation and above general expression, we get

$$
f_+ \equiv A = \frac{f(1) + f(-1)}{2} \\
f_- \equiv B = \frac{f(1) - f(-1)}{2}
$$

Thus, any function of Pauli Operator is given by

$$
f(\vec{n} \cdot \hat{\vec{\sigma}}) = f_+ I + f_- \vec{n} \cdot \hat{\vec{\sigma}}
$$

## Evaluating the Time Transformation Operator

From the postulates, we know that time evolution is described by a unitary function $\hat{U}$

$$
\hat{U}(t) = e^{-i\hat{H}t/\hbar}
$$

$\hat{H}$ is a Hermitian operator which can be expressed as

$$
\hat{H} = a_0I + |\vec{a}|\vec{n}\cdot \hat{\vec{\sigma}}
$$

Thus,

$$
\hat{U}(t) = e^{-ia_0t/\hbar} \cdot e^{-i|\vec{a}|t\vec{n}\cdot \hat{\vec{\sigma}}/\hbar}
$$

Let us ignore the global phase as it does not affect measurement probabilities. So, we consider

$$
\hat{R}_{\eta}(\vec{n}) = e^{-i \eta \vec{n}\cdot \hat{\vec{\sigma}}/2}
$$

where $\eta/2 = |\vec{a}|t/\hbar$.

Clearly, $\hat{R}_{\eta}(\vec{n})$ is a function of $\vec{n}\cdot \hat{\vec{\sigma}}$.

Take $f(x) = e^{-i\eta x/2}$. So, we have

$$
f_+ = \frac{e^{-i\eta/2} + e^{i\eta/2}}{2} = \cos \left(\frac{\eta}{2} \right)
$$

and

$$
f_- = \frac{e^{-i\eta/2} - e^{i\eta/2}}{2} = - i \sin \left(\frac{\eta}{2} \right)
$$

Thus, we get

$$
\hat{R}_{\eta}(\vec{n}) = \cos \left(\frac{\eta}{2} \right) I - i \sin \left(\frac{\eta}{2} \right) \vec{n}\cdot\hat{\vec{\sigma}}
$$

This operator physically represents the rotation of the corresponding Bloch vector about the axis $\vec{n}$ by the angle $\eta$, following the right-hand rule.

So, we have

$$
\hat{U} = e^{-iat/\hbar} \hat{R}_{\eta}(\vec{n})
$$
